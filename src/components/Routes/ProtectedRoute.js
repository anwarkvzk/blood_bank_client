import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import API from "../../services/API";
import { Navigate } from "react-router-dom";
import { getCurrentUser } from "../../redux/features/auth/authActions";

function ProtectedRoute({ children }) {
  const dispath = useDispatch();
  //get user current
  const getUser = async () => {
    try {
      const { data } = await API.get("/auth/current-user");
      if (data?.success) {
        dispath(getCurrentUser(data));
      }
    } catch (error) {
      localStorage.clear();
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  });

  if (localStorage.getItem("token")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedRoute;
