import React from "react";

const OurTeamSection = () => {
  return (
    <section className="container mx-auto pt-20 ">
      <h2 className="text-4xl font-bold text-center mb-20">
        Dikembangkan Oleh...
      </h2>

      <div className="flex relative justify-center items-center">
        <div className="tooltip -mr-10" data-tip="Jaka Asa Baldan Ahmad">
          <img
            src="/img/jaka.webp"
            alt="Jaka Asa Baldan Ahmad"
            className="cursor-pointer saturate-75 hover:saturate-100 hover:brightness-110"
          />
        </div>
        <div className="tooltip z-10" data-tip="Muhammad Syukur Abadi">
          <img
            src="/img/syukur.webp"
            alt="Muhammad Syukur Abadi"
            className=" cursor-pointer saturate-75 hover:saturate-100 hover:brightness-110"
          />
        </div>
        <div className="tooltip -ml-10" data-tip="Saddam Sinatrya Jalu Mukti">
          <img
            src="/img/saddam.webp"
            alt="Saddam Sinatrya Jalu Mukti"
            className="cursor-pointer saturate-75 hover:saturate-100 hover:brightness-110"
          />
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
