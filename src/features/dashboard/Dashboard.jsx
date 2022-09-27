import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Dashboard = () => {
  return (
    <div className="container mx-auto px-5 py-10">
      <button className="btn gap-2 mb-5">
        <FontAwesomeIcon icon={faFileUpload} />
        <span>Unggah Dokumen</span>
      </button>
    </div>
  );
};

export default Dashboard;
