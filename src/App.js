import { GoogleOAuthProvider } from "@react-oauth/google";
import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./features/dashboard/Dashboard";
import Home from "./features/home/Home";
import Login from "./features/login/Login";
import { login } from "./redux/reducers/auth";
import Footer from "./shared/components/Footer";
import Navbar from "./shared/components/Navbar";
import RequireAuth from "./shared/components/RequireAuth";
import AuthVerify from "./shared/utils/AuthVerify";

const App = () => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(login(token));
    }
  }, [dispatch]);

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <BrowserRouter>
        <div>
          <Toaster />
          <Navbar />

          <div className="relative">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/dashboard"
                element={
                  <RequireAuth>
                    <Dashboard />
                  </RequireAuth>
                }
              />
            </Routes>

            <AuthVerify />
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
