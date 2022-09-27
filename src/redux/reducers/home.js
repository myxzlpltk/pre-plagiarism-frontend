import { createSlice } from "@reduxjs/toolkit";
import { scroller } from "react-scroll";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    activeMethod: 0,
    images: [
      "/img/method2.jpg",
      "/img/method2.jpg",
      "/img/method5.jpg",
      "/img/method5.jpg",
    ],
    idCTA: "how-it-works",
  },
  reducers: {
    setActiveMethod: (state, action) => {
      state.activeMethod = action.payload;
    },
    onClickCTA: (state) => {
      scroller.scrollTo(state.idCTA, { duration: 500, offset: -80 });
    },
  },
});

export const { setActiveMethod, onClickCTA } = homeSlice.actions;
export default homeSlice.reducer;
