import { createSlice } from "@reduxjs/toolkit";
import { scroller } from "react-scroll";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    activeMethod: 0,
    methods: [
      {
        title: "Teks Ilusif",
        description: "Mengubah warna teks menjadi putih seolah-olah spasi",
        image: "/img/method2.webp"
      },
      {
        title: "Gambar Paragraf",
        description: "Mengubah bagian paragraf menjadi gambar",
        image: "/img/method2.webp"
      },
      {
        title: "Teks Tersembunyi",
        description: "Menyembunyikan teks spam dibalik gambar",
        image: "/img/method5.webp"
      },
      {
        title: "Font Palsu",
        description: "Menggunakan font palsu untuk mengubah teks",
        image: "/img/method5.webp"
      },
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
