import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./features/dashboard/Dashboard";
import Home from "./features/home/Home";
import Login from "./features/login/Login";
import ViewResult from "./features/view_result/ViewResult";
import { login } from "./redux/reducers/auth";
import Footer from "./shared/components/Footer";
import Navbar from "./shared/components/Navbar";
import RequireAuth from "./shared/components/RequireAuth";
import AuthVerify from "./shared/utils/AuthVerify";

const App = () => {
  const dispatch = useDispatch();

  // Call api login periodically
  useEffect(() => {
    const checkLogin = () => {
      const token = localStorage.getItem("token");
      if (token) {
        dispatch(login(token));
      }
    };

    checkLogin();
    const interval = setInterval(checkLogin, 5000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div>
        <Toaster />
        <Navbar />

        <div className="relative min-h-screen">
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
            <Route path="/dashboard/viewer/:id" element={<ViewResult />} />
          </Routes>

          <AuthVerify />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
