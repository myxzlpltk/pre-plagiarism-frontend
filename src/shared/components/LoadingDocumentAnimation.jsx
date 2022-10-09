import React from "react";
import { FaFilePdf } from "react-icons/fa";

const LoadingDocumentAnimation = () => {
  return (
    <div className="py-40">
      <FaFilePdf size={50} className="animate-ping mx-auto mb-10" />
      <h3 className="text-center">Memuat dokumen PDF...</h3>
    </div>
  );
};

export default LoadingDocumentAnimation;
