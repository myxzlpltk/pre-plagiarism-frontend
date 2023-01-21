import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./features/dashboard/Dashboard";
import Home from "./features/home/Home";
import Login from "./features/login/Login";
import ViewResult from "./features/view_result/ViewResult";
import {login} from "./redux/reducers/auth";
import PageLayout from "./shared/components/PageLayout";
import RequireAuth from "./shared/components/RequireAuth";

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
    // const interval = setInterval(checkLogin, 5000);
    // return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
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
        </Route>
        <Route path="/dashboard/viewer/:id" element={<ViewResult />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
