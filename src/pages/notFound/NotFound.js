import React from "react";
import logo from "./../../assets/logo.jpg";
const NotFound = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <img src={logo} alt="" width="30%" />
        <h1 className="text-center display-3">404</h1>
        <h1 className="text-center display-2">
          <span className="display-1 pe-5">OOPS!</span>Page Not Found
        </h1>
      </div>
    </div>
  );
};

export default NotFound;
