import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../../shared/lottie/uploading.json";

const FormUploadLoading = (props) => {
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
      <h3 className="text-2xl mb-5">Sedang mengunggah...</h3>
      <progress className="progress w-full" value="20" max="100"></progress>
    </div>
  );
};

export default FormUploadLoading;
