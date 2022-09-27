import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    name: null,
    email: null,
    imageUrl: null,
  },
  reducers: {
    setUser: (state, action) => {
      console.log("Payload", action.payload);
      state.isAuthenticated = true;
      state.name = action.payload.profileObj.name;
      state.email = action.payload.profileObj.email;
      state.imageUrl = action.payload.profileObj.imageUrl;
    },
    clearUser: (state) => {
      state.isAuthenticated = false;
      state.name = null;
      state.email = null;
      state.imageUrl = null;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
