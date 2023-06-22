import React from "react";
import Dropzone from "react-dropzone";
import { FaFilePdf } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { uploadFile } from "../../../redux/reducers/dashboard";

const FormUpload = () => {
  const dispatch = useDispatch();

  return (
    <Dropzone
      onDrop={(files) => dispatch(uploadFile(files))}
      accept={{ "application/pdf": [".pdf"] }}
      multiple={false}
    >
      {({ getRootProps, getInputProps, isDragActive }) => (
        <div
          className="p-10 border border-4 border-dashed rounded-2xl text-center text-gray-500 cursor-pointer hover:bg-gray-100"
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <FaFilePdf className="text-5xl mb-5 mx-auto" />
          <h3 className="text-2xl">
            {isDragActive ? "Seret file disini" : "Klik atau seret file disini"}
          </h3>
          <p className="text-md font-light">
            Berkas harus dalam format <span className="font-bold">.pdf</span>
          </p>
        </div>
      )}
    </Dropzone>
  );
};

export default FormUpload;
