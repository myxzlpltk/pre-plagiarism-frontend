import {configureStore} from "@reduxjs/toolkit";
import homeReducer from "./reducers/home";

export default configureStore({
  reducer: {
    home: homeReducer,
  },
})