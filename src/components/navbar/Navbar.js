import React from "react";
import { Link } from "react-router-dom";
import useNavbar from "./useNavbar";
const Navbar = () => {
  const { logoutUser } = useNavbar();
  let user = localStorage.getItem("user");
  let userRole = JSON.parse(user).role;
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Gulberg Boston Academy
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          ></div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Students
              </Link>
            </li>
            {userRole === "superAdmin" && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/admins">
                    Admins
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/news">
                    News
                  </Link>
                </li>
              </>
            )}

            <li className="nav-item">
              <Link className="nav-link" to="/add-marks">
                Add Marks
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mark-attendance">
                Mark Attendance
              </Link>
            </li>
          </ul>
          <button className="btn btn-outline-light mx-4" onClick={logoutUser}>
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
