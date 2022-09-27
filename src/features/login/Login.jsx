import { GoogleLogin } from "@react-oauth/google";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../redux/reducers/auth";

const Login = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return isAuthenticated ? (
    <Navigate replace to="/dashboard" />
  ) : (
    <div className="container mx-auto px-5 py-10">
      <div className="flex flex-wrap items-center">
        <div className="basis-full md:basis-1/2">
          <img src="/svg/login.svg" alt="Login" className="max-w-md mx-auto" />
        </div>
        <div className="basis-full md:basis-1/2 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-2">Tak perlu khawatir...</h1>
          <h3 className="text-md mb-5">
            <span>
              Sekarang login hanya satu klik dengan akun Google kampus.
            </span>
            <br />
            <span>Tidak perlu mengingat username dan password lagi...</span>
          </h3>
          <GoogleLogin
            onSuccess={(res) => dispatch(login(res.credential))}
            onError={() => toast.error("Terjadi kesalahan saat login")}
            text="continue_with"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
