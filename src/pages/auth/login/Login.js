import React from "react";
import ButtonLoader from "../../../components/buttonLoader/ButtonLoader";
import "./Login.css";
import useLogin from "./useLogin";
import { useSelector } from "react-redux";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
const Login = () => {
  const { formik, passwordAppearance, setPasswordAppearance, isProcessing } =
    useLogin();
  return (
    <div className="container-fluid loginPage d-flex flex-column justify-content-between">
      <div className="row">
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <span className="navbar-brand  h1 text-center">
              Gulberg Boston Academy
            </span>
          </div>
        </nav>
      </div>
      <div className="row flex justify-content-center align-items-center">
        <div className="formContainer col-8  border-2 border border-secondary rounded p-4">
          <div className="row">
            <h1 className="text-center">Login</h1>
          </div>
          <form className="d-flex flex-column" onSubmit={formik.handleSubmit}>
            <div className="row mb-3">
              <label htmlFor="email" className="col-sm-2 col-form-label">
                Email:
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  required
                />
                {formik.errors.email && (
                  <div className="text-danger fw-bold text-center fs-5">
                    {formik.errors.email}
                  </div>
                )}
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="password" className="col-sm-2 col-form-label">
                Password:
              </label>
              {passwordAppearance ? (
                <div className="col-sm-10">
                  <div className="d-flex align-items-center justify-content-space-between ">
                    <input
                      type="text"
                      className="form-control "
                      id="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      required
                    />
                    <AiFillEyeInvisible
                      size={20}
                      style={{
                        marginLeft: 10,
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setPasswordAppearance(!passwordAppearance);
                      }}
                    />
                  </div>
                  {formik.errors.password && (
                    <div className="text-danger fw-bold text-center fs-5">
                      {formik.errors.password}
                    </div>
                  )}
                </div>
              ) : (
                <div className="col-sm-10">
                  <div className="d-flex align-items-center justify-content-space-between ">
                    <input
                      type="password"
                      className="form-control "
                      id="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      required
                    />
                    <AiFillEye
                      size={20}
                      style={{
                        marginLeft: 10,
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setPasswordAppearance(!passwordAppearance);
                      }}
                    />
                  </div>
                  {formik.errors.password && (
                    <div className="text-danger fw-bold text-center fs-5">
                      {formik.errors.password}
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="align-self-center">
              {isProcessing ? (
                <button
                  type="button"
                  className="btn btn-dark px-5"
                  disabled={isProcessing}
                >
                  <ButtonLoader
                    size={11}
                    loading={isProcessing}
                    color="white"
                  />
                </button>
              ) : (
                <button type="submit" className="btn btn-dark px-5">
                  Sign in
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
