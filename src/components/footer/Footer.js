import React from "react";

const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <div className="container-fluid">
      <div className="row bg-dark text-center">
        <div className="col py-2">
          <span className="text-white">
            &copy; All copyrights reserved {year}
          </span>
          <span className="text-white fw-bold"> Made by Abu Hurairah</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
