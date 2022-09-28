import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    jobStatus: "working",
    job: {
      createdAt: 1664356415956,
    },
    fetchStatus: "loading",
    data: [],
  },
  extraReducers: (builder) => {
    builder.addCase(uploadFile.pending, (state) => {
      state.jobStatus = "loading";
    });
    builder.addCase(uploadFile.fulfilled, (state) => {
      state.jobStatus = "working";
      toast.success("File uploaded successfully");
    });
    builder.addCase(uploadFile.rejected, (state, action) => {
      state.jobStatus = "idle";
      if (action.meta.rejectedWithValue) {
        toast.error(action.payload);
      } else {
        toast.error("Terjadi kesalahan");
      }
    });

    builder.addCase(fetchDashboardData.pending, (state) => {
      state.fetchStatus = "loading";
    });
    builder.addCase(fetchDashboardData.fulfilled, (state, action) => {
      state.fetchStatus = "success";
      state.data = action.payload;
    });
    builder.addCase(fetchDashboardData.rejected, (state, action) => {
      state.fetchStatus = "error";
      if (action.meta.rejectedWithValue) {
        toast.error(action.payload);
      } else {
        toast.error("Terjadi kesalahan");
      }
    });
  },
});

export const fetchDashboardData = createAsyncThunk(
  "dashboard/fetchDashboardData",
  async () => {
    await new Promise((r) => setTimeout(r, 1500));

    return [...Array(10).keys()];
  }
);

export const uploadFile = createAsyncThunk(
  "dashboard/upload",
  async (files: File[], { rejectWithValue }) => {
    const acceptedFiles = files.filter(
      (file) => file.type === "application/pdf"
    );

    if (acceptedFiles.length === 0) {
      return rejectWithValue("Tidak ada file yang diupload");
    } else if (acceptedFiles.length > 1) {
      return rejectWithValue("Hanya boleh upload 1 file");
    } else {
      await new Promise((r) => setTimeout(r, 3000));
      return acceptedFiles[0];
    }
  }
);

// export const { setStatus } = dashboardSlice.actions;
export default dashboardSlice.reducer;
