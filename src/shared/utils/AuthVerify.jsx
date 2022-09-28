import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { logout } from "../../redux/reducers/auth";

const AuthVerify = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decodedJwt = jwtDecode(token);

      if (decodedJwt.exp * 1000 < Date.now()) {
        toast.error("Sesi anda telah berakhir, silahkan login kembali");
        dispatch(logout());
      }
    }
  }, [dispatch, location, props]);
};

export default AuthVerify;
