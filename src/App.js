import { gapi } from "gapi-script";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./features/dashboard/Dashboard";
import Home from "./features/home/Home";
import Login from "./features/login/Login";
import Footer from "./shared/components/Footer";
import Navbar from "./shared/components/Navbar";
import RequireAuth from "./shared/components/RequireAuth";

function App() {
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: "profile",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  return (
    <BrowserRouter>
      <div>
        <Navbar />

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

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
