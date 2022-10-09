import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import dashboardReducer from "./reducers/dashboard";
import homeReducer from "./reducers/home";
import viewerReducer from "./reducers/viewer";

export default configureStore({
  reducer: {
    home: homeReducer,
    auth: authReducer,
    dashboard: dashboardReducer,
    viewer: viewerReducer,
  },
});
