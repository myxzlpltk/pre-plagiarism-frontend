import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveMethod } from "../../../redux/reducers/home";
import MethodCard from "./MethodCard";
import SimpleMethodCard from "./SimpleMethodCard";

const HowItWorksSection = () => {
  const images = useSelector((state) => state.home.images);
  const activeMethod = useSelector((state) => state.home.activeMethod);
  const dispatch = useDispatch();

  const data = [
    {
      title: "Teks Ilusif",
      description: "Mengubah warna teks menjadi putih seolah-olah spasi",
    },
    {
      title: "Gambar Paragraf",
      description: "Mengubah bagian paragraf menjadi gambar",
    },
    {
      title: "Teks Tersembunyi",
      description: "Menyembunyikan teks spam dibalik gambar",
    },
    {
      title: "Font Palsu",
      description: "Menggunakan font palsu untuk mengubah teks",
    },
  ];

  return (
    <section
      className="bg-how-it-works bg-cover bg-no-repeat text-white"
      id="how-it-works"
    >
      <div className="backdrop-blur-2xl">
        <div className="container mx-auto py-20 px-10">
          <h2 className="text-4xl font-bold text-center mb-2">
            Bagaimana Cara Kerjanya?
          </h2>
          <h5 className="font-light text-center mb-10 lg:mb-20">
            Kami memeriksa dokumen anda berdasarkan berbagai macam manipulasi.
          </h5>
          <div className="flex flex-wrap">
            <div className="basis-5/12 pt-10 hidden lg:block">
              {data.map((item, index) => (
                <MethodCard
                  key={`method-card-${index}`}
                  title={item.title}
                  description={item.description}
                  active={activeMethod === index}
                  onClick={() => dispatch(setActiveMethod(index))}
                />
              ))}
            </div>
            <div className="basis-full block lg:hidden">
              <div className="flex flex-wrap items-center justify-center mb-2">
                {data.map((item, index) => (
                  <SimpleMethodCard
                    key={`simple-method-card-${index}`}
                    title={item.title}
                    active={activeMethod === index}
                    onClick={() => dispatch(setActiveMethod(index))}
                  />
                ))}
              </div>
              <p className="text-center mb-4">
                {data[activeMethod].description}
              </p>
            </div>
            <div className="basis-full lg:basis-7/12">
              <img
                src={images[activeMethod]}
                alt="Metode"
                className="max-w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
