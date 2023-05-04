/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  console.log(user);

  const location = useLocation();

  if (loader) {
    return (
      <div className="bg-black h-96">
        <FadeLoader color="#c6a87d" className="mx-auto py-20" />
      </div>
    );
    // return <p>Loading.......</p>
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;