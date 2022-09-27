import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { setUser } from "../../redux/reducers/auth";

const Login = () => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
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
            clientId={clientId}
            buttonText="Masuk dengan Akun Google"
            onSuccess={(res) => dispatch(setUser(res))}
            onFailure={() => window.alert("Error on login")}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
            className="mb-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
