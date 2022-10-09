import React from "react";
import { FaHeart, FaReact } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-10 bg-gray-100 text-base-content">
      <div className="footer container mx-auto">
        <div>
          <p className="footer-title opacity-100">
            <span>Built with </span>
            <FaHeart className="text-red-600 inline" />
            <span> and </span>
            <FaReact className="text-cyan-500 inline" />
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
