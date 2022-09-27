import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";

const FormUpload = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="p-10 border border-4 border-dashed rounded-2xl text-center text-gray-500 cursor-pointer hover:bg-gray-100"
    >
      <FontAwesomeIcon icon={faFilePdf} className="text-5xl mb-5" />
      <h3 className="text-2xl">Unggah dokumen</h3>
      <p className="text-md font-light">
        Berkas harus dalam format <span className="font-bold">.pdf</span>
      </p>
    </div>
  );
};

FormUpload.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default FormUpload;
