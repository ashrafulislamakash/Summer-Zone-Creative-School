import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <Player
        autoplay={true}
        loop={true}
        src="https://assets4.lottiefiles.com/packages/lf20_jjmto1qp.json"
        style={{ height: "400px", width: "400px" }}
      ></Player>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
