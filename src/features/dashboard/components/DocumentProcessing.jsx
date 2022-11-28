import moment from "moment";
import "moment/locale/id";
import React from "react";
import Lottie from "react-lottie";
import { useSelector } from "react-redux";
import SimpleTimer from "../../../shared/components/SimpleTimer";
import * as animationData from "../../../shared/lottie/checking-doc.json";

const DocumentProcessing = (props) => {
  const jobCreatedAt = useSelector((state) => state.dashboard.jobCreatedAt);
  const date = moment(jobCreatedAt).unix();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      onClick={props.onClick}
      className="p-10 border border-4 border-dashed rounded-2xl text-center text-gray-500 cursor-pointer hover:bg-gray-100"
    >
      <p className="text-md font-semibold">
        <span>Waktu eksekusi </span>
        <SimpleTimer time={date} />
      </p>
      <Lottie options={defaultOptions} width="50%" isClickToPauseDisabled />
      <h3 className="text-2xl">Sedang memproses...</h3>
      <p className="text-sm font-light line-clamp-1">
        Skripsi Revisi Saddam.pdf
      </p>
    </div>
  );
};

export default DocumentProcessing;
