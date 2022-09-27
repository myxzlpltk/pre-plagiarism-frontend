import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer className="p-10 bg-gray-100 text-base-content">
      <div className="footer container mx-auto">
        <div>
          <p className="footer-title opacity-100">
            Built with{" "}
            <FontAwesomeIcon icon={faHeart} className="text-red-600" /> and{" "}
            <FontAwesomeIcon icon={faReact} className="text-cyan-500" />
            <br />
          </p>
          <p>
            <span>Teknik Informatika</span>
            <br />
            <span>Universitas Negeri Malang</span>
          </p>
        </div>
        <div>
          <span className="footer-title">Dosen Pembimbing </span>
          <p>
            <span>Utomo Pujianto, S.Kom., M.Kom.</span>
            <br />
            <span>Harits Ar Rosyid, S.T., M.T., Ph.D.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
