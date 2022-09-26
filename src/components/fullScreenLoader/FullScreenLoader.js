import React from "react";
import logo from "./../../assets/logo.jpg";
import "./FullScreenLoader.css";
const FullScreenLoader = () => {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
      }}
    >
      <img
        src={logo}
        alt="Gulberg Boston Academy"
        className="imgFullScreenLoader"
      />
    </div>
  );
};

export default FullScreenLoader;
