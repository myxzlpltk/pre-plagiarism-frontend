import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import api from "../../api";
import { login } from "./auth";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    jobStatus: "idle",
    jobCreatedAt: null,
    jobFileName: "file.pdf",
    fetchStatus: "loading",
    data: [],
  },
  reducers: {
    setJobFileName: (state, action) => {
      state.jobFileName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload.idle) {
        state.jobStatus = "idle";
      } else {
        state.jobStatus = "working";
        state.jobCreatedAt = action.payload.jobCreatedAt;
      }
    });
    builder.addCase(uploadFile.pending, (state) => {
      state.jobStatus = "loading";
    });
    builder.addCase(uploadFile.fulfilled, (state, action) => {
      state.jobStatus = "working";
      state.jobCreatedAt = action.payload.createdAt;
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
  async (_, { rejectWithValue }) => {
    const res = await api.get("documents");

    if (res.status === 200) {
      return res.data;
    } else {
      return rejectWithValue("Terjadi kesalahan");
    }
  }
);

export const uploadFile = createAsyncThunk(
  "dashboard/upload",
  async (files: File[], { rejectWithValue, dispatch }) => {
    const acceptedFiles = files.filter(
      (file) => file.type === "application/pdf"
    );

    if (acceptedFiles.length === 0) {
      return rejectWithValue("Tidak ada file yang diupload");
    } else if (acceptedFiles.length > 1) {
      return rejectWithValue("Hanya boleh upload 1 file");
    } else {
      dispatch(setJobFileName(acceptedFiles[0].name));

      const formData = new FormData();
      formData.append("file", acceptedFiles[0]);

      const res = await api.post("documents", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.status === 200) {
        dispatch(fetchDashboardData());
        return res.data;
      } else {
        return rejectWithValue("Terjadi kesalahan");
      }
    }
  }
);

export const { setJobFileName } = dashboardSlice.actions;
export default dashboardSlice.reducer;
