import React, { useEffect } from "react";
import { GoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearUser } from "../../redux/reducers/auth";

const Navbar = () => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
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
          {isAuthenticated ? (
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/dashboard">Dasbor</Link>
                </li>
              </ul>
            </div>
          ) : null}
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src="/svg/logo.svg" alt="Logo" className="mr-2" />
            <span>{appName}</span>
          </Link>
        </div>
        {isAuthenticated ? (
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link to="/dashboard">Dasbor</Link>
              </li>
            </ul>
          </div>
        ) : null}
        <div className="navbar-end">
          {isAuthenticated ? (
            <GoogleLogout
              clientId={clientId}
              onLogoutSuccess={() => dispatch(clearUser())}
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  className="btn btn-sm btn-primary"
                >
                  Keluar
                </button>
              )}
            />
          ) : (
            <Link to="/login" className="btn btn-sm btn-primary">
              Masuk
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
