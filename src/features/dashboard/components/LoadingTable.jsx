import PropTypes from "prop-types";
import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../../shared/lottie/loading-data.json";

const LoadingTable = (props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={props.className}>
      <Lottie options={defaultOptions} width="50%" isClickToPauseDisabled />
    </div>
  );
};

LoadingTable.propTypes = {
  className: PropTypes.string,
};

export default LoadingTable;
