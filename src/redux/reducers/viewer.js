import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import api from "../../api";

function merge(r1, r2) {
  return {
    x1: Math.min(r1.x1, r2.x1),
    y1: Math.min(r1.y1, r2.y1),
    x2: Math.max(r1.x2, r2.x2),
    y2: Math.max(r1.y2, r2.y2),
  };
}

function mergeAll(array) {
  let combined = array[0];
  for (let i = 1; i < array.length; i++) {
    combined = merge(combined, array[i]);
  }
  return combined;
}

export const viewerSlice = createSlice({
  name: "viewer",
  initialState: {
    status: "idle",
    url: "/docs/combined.pdf",
    highlights: [],
    activeIndex: -1,
  },
  reducers: {
    setActiveIndex: (state, action) => {
      state.activeIndex = action.payload;
      window.history.replaceState(
        undefined,
        undefined,
        `#highlight-${state.highlights[action.payload].id}`
      );
    },
    resetHighlight: (state) => {
      state.activeIndex = -1;
      window.history.replaceState(undefined, undefined, "#");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDocumentData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchDocumentData.fulfilled, (state, action) => {
      state.status = "success";
      state.url = `${process.env.REACT_APP_API_URL}/files/${action.payload.id}/${action.payload.filename}`;
      state.highlights = action.payload.highlights;

      let id = document.location.hash.slice("#highlight-".length);
      if (id) {
        let index = state.highlights.findIndex((h) => h.id === id);
        if (index !== -1) {
          state.activeIndex = index;
        }
      }
    });
    builder.addCase(fetchDocumentData.rejected, (state, action) => {
      state.status = "error";
      if (action.meta.rejectedWithValue) {
        toast.error(action.payload);
      } else {
        toast.error("Terjadi kesalahan");
      }
    });
  },
});

export const fetchDocumentData = createAsyncThunk(
  "viewer/fetchDocumentData",
  async (id: String, { rejectWithValue }) => {
    const res = await api.get("documents/" + id);

    if (res.status !== 200) {
      return rejectWithValue("Terjadi kesalahan");
    }

    let highlights = [];

    (res.data.result?.method2?.pages || []).forEach((page) => {
      page.items.forEach((item, index) => {
        highlights.push({
          id: "method2-" + page.page + "-" + index,
          comment: {
            text: "Gambar paragraf terdeteksi!",
          },
          content: {
            image: "",
          },
          position: {
            boundingRect: {
              x1: item.rect.x1,
              y1: item.rect.y1,
              x2: item.rect.x2,
              y2: item.rect.y2,
              width: page.width,
              height: page.height,
            },
            rects: [
              {
                x1: item.rect.x1,
                y1: item.rect.y1,
                x2: item.rect.x2,
                y2: item.rect.y2,
                width: page.width,
                height: page.height,
              },
            ],
            pageNumber: page.page + 1,
          },
        });
      });
    });

    (res.data.result?.method5?.pages || []).forEach((page, index) => {
      let rects = page.items.map((item) => ({
        x1: item.rect.x0,
        y1: item.rect.y0,
        x2: item.rect.x1,
        y2: item.rect.y1,
        width: page.page_width,
        height: page.page_height,
      }));
      let combinedRect = mergeAll(rects);

      highlights.push({
        id: "method5-" + page.page + "-" + index,
        comment: {
          text: "Font palsu terdeteksi!",
        },
        content: {
          text: "",
        },
        position: {
          boundingRect: {
            x1: combinedRect.x1,
            y1: combinedRect.y1,
            x2: combinedRect.x2,
            y2: combinedRect.y2,
            width: page.width,
            height: page.height,
          },
          rects: rects,
          pageNumber: page.page + 1,
        },
      });
    });

    highlights.sort(
      (a, b) => a.position.boundingRect.x1 - b.position.boundingRect.x1
    );
    highlights.sort(
      (a, b) => a.position.boundingRect.y1 - b.position.boundingRect.y1
    );
    highlights.sort((a, b) => a.position.pageNumber - b.position.pageNumber);

    return {
      id: id,
      filename: res.data.filename,
      highlights: highlights,
    };
  }
);

export const { setActiveIndex, resetHighlight } = viewerSlice.actions;
export default viewerSlice.reducer;
