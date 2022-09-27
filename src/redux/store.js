import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import homeReducer from "./reducers/home";

export default configureStore({
  reducer: {
    home: homeReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
