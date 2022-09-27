import { faHome, faSignIn, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/reducers/auth";

const Navbar = () => {
  const appName = process.env.REACT_APP_NAME;
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    const dropdownContent = document.querySelectorAll(".dropdown-content>li");
    dropdownContent.forEach((element) => {
      element.addEventListener("click", () => {
        document.activeElement.blur();
      });
    });
  });

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="container mx-auto navbar py-4">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src="/svg/logo.svg" alt="Logo" className="mr-2" />
            <span>{appName}</span>
          </Link>
        </div>
        <div className="navbar-end">
          {isAuthenticated ? (
            <div className="flex gap-2">
              <Link to="/login" className="btn btn-sm btn-square btn-ghost">
                <FontAwesomeIcon icon={faHome} />
              </Link>
              <button
                onClick={() => dispatch(logout())}
                className="btn btn-sm btn-error gap-2"
              >
                <FontAwesomeIcon icon={faSignOut} />
                <span>Keluar</span>
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-sm btn-primary gap-2">
              <FontAwesomeIcon icon={faSignIn} />
              <span>Masuk</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
