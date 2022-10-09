import React, { useEffect } from "react";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/reducers/auth";

const Navbar = () => {
  const appName = process.env.REACT_APP_NAME;
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const picture = useSelector((state) => state.auth.picture);
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
              <Link to="/login" className="btn btn-square btn-ghost">
                <MdDashboard size={24} />
              </Link>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={picture} alt="Foto profil" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <button
                      onClick={() => dispatch(logout())}
                      className="flex gap-2"
                    >
                      <FaSignOutAlt />
                      <span>Keluar</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link to="/login" className="btn btn-sm btn-primary gap-2">
              <FaSignInAlt />
              <span>Masuk</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
