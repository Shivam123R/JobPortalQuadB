import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../../redux/features/alertSlice";
import axios from "axios";
import { setUser } from "../../redux/features/authSlice";
import { Navigate, useNavigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      dispatch(showLoading());
      const { data } = await axios.get("http://localhost:4000/auth/getUser", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch(hideLoading());
      if (data.success) {
        dispatch(setUser(data.data));
      } else {
        localStorage.clear();
        navigate("/login");
      }
    } catch (error) {
      localStorage.clear();
      dispatch(hideLoading());
      console.error(error);
    }
  };

  useEffect(() => {
    if (!user) {
      getUser();
    }
  });

  if (localStorage.getItem("token")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default PrivateRoute;
