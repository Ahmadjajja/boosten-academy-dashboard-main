import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddStudents from "./../pages/addStudents/AddStudent";
import Login from "../pages/auth/login/Login";
import Students from "../pages/students/Students";
import Admins from "../pages/admins/Admins";
import AddAdmins from "../pages/addAdmins/AddAdmins";
import PrivateRoutes from "./PrivateRoutes";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import NotFound from "../pages/notFound/NotFound";
import AddMarks from "../pages/addMarks/AddMarks";
import MarkAttendance from "../pages/markAttendance/MarkAttendance";
import News from "../pages/news/News";
const Routing = () => {
  const isUserAuthenticated = useSelector(
    (store) => store.authReducer.isUserAuthenticated
  );
  let userRole;
  if (isUserAuthenticated === true) {
    userRole = localStorage.getItem("user");
    userRole = JSON.parse(userRole).role;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" to={<NotFound />} />
        <Route
          path="/login"
          element={
            isUserAuthenticated ? <Navigate to="/students" /> : <Login />
          }
        />
        <Route
          path="/add-students"
          element={<PrivateRoutes Component={AddStudents} />}
        />
        <Route
          path="/add-marks"
          element={<PrivateRoutes Component={AddMarks} />}
        />
        <Route
          path="/mark-attendance"
          element={<PrivateRoutes Component={MarkAttendance} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoutes Component={Students} />} />
        <Route
          path="/add-admins"
          element={
            isUserAuthenticated ? (
              userRole === "superAdmin" ? (
                <PrivateRoutes Component={AddAdmins} />
              ) : (
                <Navigate to="/" />
              )
            ) : (
              <PrivateRoutes Component={AddAdmins} />
            )
          }
        />
        <Route
          path="/admins"
          element={
            isUserAuthenticated ? (
              userRole === "superAdmin" ? (
                <PrivateRoutes Component={Admins} />
              ) : (
                <Navigate to="/" />
              )
            ) : (
              <PrivateRoutes Component={Admins} />
            )
          }
        />
        <Route
          path="/news"
          element={
            isUserAuthenticated ? (
              userRole === "superAdmin" ? (
                <PrivateRoutes Component={News} />
              ) : (
                <Navigate to="/" />
              )
            ) : (
              <PrivateRoutes Component={News} />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
