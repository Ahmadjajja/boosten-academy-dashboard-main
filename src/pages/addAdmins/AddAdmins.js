import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import useAddAdmins from "./useAddAdmins";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import ButtonLoader from "./../../components/buttonLoader/ButtonLoader";
const AddAdmins = () => {
  const {
    formik,
    passwordAppearance,
    setPasswordAppearance,
    cPasswordAppearance,
    setCPasswordAppearance,
    loader,
  } = useAddAdmins();
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="mx-5 mt-5">
        <div
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
          className="card p-4 rounded-3 border border-secondary"
        >
          <div className="d-flex flex-row-reverse align-items-center justify-content-between">
            <div className="text-end">
              <Link to="/admins">
                <AiOutlineCloseCircle color="#000" size={30} />
              </Link>
            </div>
            <h1 className="align-items-center">Add Admins</h1>
          </div>
          <form className="row g-3" onSubmit={formik.handleSubmit}>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                title="Email for admin"
                required
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && (
                <div className="fw-bold text-danger text-center">
                  {formik.errors.email}
                </div>
              )}
            </div>
            <div className="col-md-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              {!passwordAppearance ? (
                <div className="d-flex align-items-start">
                  <div>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      required
                    />
                    {formik.errors.password && (
                      <div className="fw-bold text-danger text-center">
                        {formik.errors.password}
                      </div>
                    )}
                  </div>
                  <div
                    className="ms-1 mt-2"
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setPasswordAppearance(!passwordAppearance);
                    }}
                  >
                    <AiFillEye size={20} />
                  </div>
                </div>
              ) : (
                <div className="d-flex align-items-start">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      required
                    />
                    {formik.errors.password && (
                      <div className="fw-bold text-danger text-center">
                        {formik.errors.password}
                      </div>
                    )}
                  </div>
                  <div
                    className="ms-1 mt-2"
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setPasswordAppearance(!passwordAppearance);
                    }}
                  >
                    <AiFillEyeInvisible size={20} />
                  </div>
                </div>
              )}
            </div>
            <div className="col-md-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              {!cPasswordAppearance ? (
                <div className="d-flex align-items-start">
                  <div>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="Confirm Password"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      required
                    />
                    {formik.errors.confirmPassword && (
                      <div className="fw-bold text-danger text-center">
                        {formik.errors.confirmPassword}
                      </div>
                    )}
                  </div>
                  <div
                    className="ms-1 mt-2"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <AiFillEye
                      size={20}
                      onClick={() => {
                        setCPasswordAppearance(!cPasswordAppearance);
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className="d-flex align-items-start">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="Confirm Password"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      required
                    />
                    {formik.errors.confirmPassword && (
                      <div className="fw-bold text-danger text-center">
                        {formik.errors.confirmPassword}
                      </div>
                    )}
                  </div>
                  <div
                    className="ms-1 mt-2"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <AiFillEyeInvisible
                      size={20}
                      onClick={() => {
                        setCPasswordAppearance(!cPasswordAppearance);
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="col-6">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Full Name e.g. Abu Hurairah"
                value={formik.values.name}
                onChange={formik.handleChange}
                required
              />
              {formik.errors.name && (
                <div className="fw-bold text-danger text-center">
                  {formik.errors.name}
                </div>
              )}
            </div>
            <div className="col-6">
              <label htmlFor="FName" className="form-label">
                Father Name
              </label>
              <input
                type="text"
                className="form-control"
                id="FName"
                name="fatherName"
                placeholder="Full Name e.g. Muhammad Shafique"
                onChange={formik.handleChange}
                required
              />
              {formik.errors.name && (
                <div className="fw-bold text-danger text-center">
                  {formik.errors.name}
                </div>
              )}
            </div>
            <div className="col-12">
              <label htmlFor="address" className="form-label">
                Present Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Present address"
                required
                value={formik.values.address}
                onChange={formik.handleChange}
              />
              {formik.errors.address && (
                <div className="fw-bold text-danger text-center">
                  {formik.errors.address}
                </div>
              )}
            </div>
            <div className="col-12 text-center mt-4">
              <button
                type="submit"
                className="btn btn-outline-dark px-5 fw-bold"
                disabled={loader}
              >
                {loader ? <ButtonLoader size={13} /> : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAdmins;
