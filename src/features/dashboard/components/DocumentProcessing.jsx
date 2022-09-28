import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../../shared/lottie/checking-doc.json";

const DocumentProcessing = (props) => {
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
      <Lottie options={defaultOptions} width="50%" isClickToPauseDisabled />
      <h3 className="text-2xl mb-2">Sedang memproses...</h3>
      <p className="text-md font-semibold">Skripsi Revisi II.pdf</p>
      <p className="text-md font-light flex items-center justify-center gap-2">
        <FontAwesomeIcon icon={faClock} />
        <span>5 jam 21 menit</span>
      </p>
    </div>
  );
};

export default DocumentProcessing;
