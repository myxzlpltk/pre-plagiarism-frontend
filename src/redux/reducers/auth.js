import { googleLogout } from "@react-oauth/google";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import toast from "react-hot-toast";
import api from "../../api";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    name: null,
    email: null,
    picture: null,
    idle: null,
  },
  reducers: {
    logout: (state) => {
      localStorage.clear();
      googleLogout();
      state.isAuthenticated = false;
      state.name = null;
      state.email = null;
      state.imageUrl = null;
      state.idle = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.picture = action.payload.picture;
      state.idle = action.payload.idle;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isAuthenticated = false;
      if (action.meta.rejectedWithValue) {
        toast.error(action.payload);
      } else {
        toast.error("Terjadi kesalahan");
      }
    });
  },
});

export const login = createAsyncThunk(
  "auth/login",
  async (token, { rejectWithValue, dispatch }) => {
    localStorage.setItem("token", token);
    const decoded = jwtDecode(token, {});

    if (decoded.exp * 1000 < Date.now()) {
      dispatch(logout());
      return rejectWithValue(
        "Sesi login telah berakhir, silahkan login kembali"
      );
    } else {
      const res = await api.post("auth");

      if (res.status === 200) {
        return res.data;
      } else {
        return rejectWithValue("Verifikasi token gagal");
      }
    }
  }
);

export const { logout } = authSlice.actions;
export default authSlice.reducer;
