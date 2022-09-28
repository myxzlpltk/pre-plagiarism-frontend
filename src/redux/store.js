import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import dashboardReducer from "./reducers/dashboard";
import homeReducer from "./reducers/home";

export default configureStore({
  reducer: {
    home: homeReducer,
    auth: authReducer,
    dashboard: dashboardReducer,
  },
});
