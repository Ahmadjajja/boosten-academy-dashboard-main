import React from "react";
import { Link } from "react-router-dom";
import useAddStudents from "./useAddStudents";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ButtonLoader from "./../../components/buttonLoader/ButtonLoader";
const AddStudent = () => {
  const { formik, buttonLoader } = useAddStudents();

  return (
    <div className="container">
      <div className="m-3">
        <div
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
          className="card p-4 rounded-3 border border-secondary"
        >
          <div className="d-flex flex-row-reverse align-items-center justify-content-between">
            <div className="text-end">
              <Link to="/">
                <AiOutlineCloseCircle color="#000" size={30} />
              </Link>
            </div>
            <h1 className="align-items-center">Add Students</h1>
          </div>
          <form
            className="row g-3"
            onSubmit={formik.handleSubmit}
            onReset={formik.handleReset}
          >
            <div className="col-md-5">
              <label htmlFor="inputName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                name="name"
                placeholder="Name"
                pattern="[a-zA-Z\s]+"
                value={formik.values.name}
                onChange={formik.handleChange}
                required
                title="Student's Name (Only Alphabet's are allowed)"
              />
              {formik.errors.name && (
                <div className="text-center fw-bold text-danger">
                  {formik.errors.name}
                </div>
              )}
            </div>
            <div className="col-md-5">
              <label htmlFor="inputFName" className="form-label">
                Father's Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputFName"
                name="FName"
                placeholder="Father's Name"
                pattern="[a-zA-Z\s]+"
                onChange={formik.handleChange}
                title="Father's Name"
                required
              />
              {formik.errors.FName && (
                <div className="text-center fw-bold text-danger">
                  {formik.errors.FName}
                </div>
              )}
            </div>
            <div className="col-md-2">
              <label htmlFor="inputRollNo." className="form-label">
                Roll No.
              </label>
              <input
                type="number"
                className="form-control"
                id="inputRollNo."
                name="rollNo"
                placeholder="Roll No."
                pattern="[0-9]{5}"
                onChange={formik.handleChange}
                title="Roll No. Pattern: '22000'"
                required
              />
              {formik.errors.rollNo && (
                <div className="text-center fw-bold text-danger">
                  {formik.errors.rollNo}
                </div>
              )}
            </div>
            <div className="col-md-4">
              <label htmlFor="inputDOB" className="form-label">
                Date of Birth
              </label>
              <input
                type="date"
                className="form-control"
                id="inputDOB"
                name="DOB"
                onChange={formik.handleChange}
                title="Student's Date of Birth"
                required
              />
              {formik.errors.DOB && (
                <div className="text-center fw-bold text-danger">
                  {formik.errors.DOB}
                </div>
              )}
            </div>
            <div className="col-md-4">
              <label htmlFor="inputSNum" className="form-label">
                Student's Phone #
              </label>
              <input
                type="number"
                className="form-control"
                id="inputSNum"
                name="SNum"
                placeholder="Student's Phone #"
                onChange={formik.handleChange}
                min="923000000000"
                max="923500000000"
                pattern="[0-9]{12}"
                title="Student's Phone (Phone number Pattern :'923336584571')"
                required
              />
              {formik.errors.SNum && (
                <div className="text-center fw-bold text-danger">
                  {formik.errors.SNum}
                </div>
              )}
            </div>
            <div className="col-md-4">
              <label htmlFor="inputFNum" className="form-label">
                Father's Phone #
              </label>
              <input
                type="number"
                className="form-control"
                id="inputFNum"
                name="FNum"
                placeholder="Father's Phone #"
                onChange={formik.handleChange}
                min="923000000000"
                max="923500000000"
                title="Father's Phone (Phone number Pattern :'923336584571')"
                pattern="[0-9]{12}"
                required
              />
              {formik.errors.FNum && (
                <div className="text-center fw-bold text-danger">
                  {formik.errors.FNum}
                </div>
              )}
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">
                Present Address
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Present Address"
                name="address"
                onChange={formik.handleChange}
                title="Student's Address"
                required
              />
              {formik.errors.address && (
                <div className="text-center fw-bold text-danger">
                  {formik.errors.address}
                </div>
              )}
            </div>
            <div className="col-md-7">
              <label htmlFor="inputCity" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                name="city"
                placeholder="City"
                onChange={formik.handleChange}
                title="Students City"
                required
              />
              {formik.errors.city && (
                <div className="text-center fw-bold text-danger">
                  {formik.errors.city}
                </div>
              )}
            </div>
            <div className="col-md-5">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <select
                id="gender"
                className="form-select"
                name="gender"
                onChange={formik.handleChange}
                title="Student's Gender(Select the student's gender from the list)"
                required
              >
                <option value="">Choose Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
              {formik.errors.gender && (
                <div className="text-center fw-bold text-danger">
                  {formik.errors.gender}
                </div>
              )}
            </div>
            <div className="col-md-5">
              <label htmlFor="class" className="form-label">
                Class
              </label>
              <select
                id="class"
                className="form-select"
                name="class"
                onChange={formik.handleChange}
                title="Student's Class(Select the student's class from the list)"
                required
              >
                <option value="">Choose Class</option>
                <option value="9th">9th</option>
                <option value="10th">10th</option>
                <option value="1st-year">11th</option>
                <option value="2nd-year">12th</option>
              </select>{" "}
              {formik.errors.class && (
                <div className="text-center fw-bold text-danger">
                  {formik.errors.class}
                </div>
              )}
            </div>
            <div className="col-md-7">
              <label htmlFor="subjects" className="form-label">
                Subjects
              </label>
              <select
                id="inputState"
                className="form-select"
                name="subjects"
                onChange={formik.handleChange}
                title="Student's Class(Select the student's class from the list)"
                required
              >
                <option value="">Choose Subjects</option>
                {/* Subjects for 9th Class */}
                {formik.values.class === "9th" && (
                  <>
                    <option
                      value='[
                        "English",
                        "Urdu",
                        "Maths",
                        "IS",
                        "PS",
                        "Physics",
                        "Chemistry",
                        "Biology"
                      ]'
                    >
                      Biology Group
                    </option>
                    <option
                      value='[
                        "English",
                        "Urdu",
                        "Maths",
                        "IS",
                        "PS",
                        "Physics",
                        "Chemistry",
                        "Computer"
                      ]'
                    >
                      Computer Group
                    </option>
                  </>
                )}
                {/* Subjects for 10th Class */}
                {formik.values.class === "10th" && (
                  <>
                    <option
                      value='[
                        "English",
                        "Urdu",
                        "Maths",
                        "IS",
                        "PS",
                        "Physics",
                        "Chemistry",
                        "Biology"
                      ]'
                    >
                      Biology Group
                    </option>
                    <option
                      value='[
                        "English",
                        "Urdu",
                        "Maths",
                        "IS",
                        "PS",
                        "Physics",
                        "Chemistry",
                        "Computer"
                      ]'
                    >
                      Computer Group
                    </option>
                  </>
                )}
                {/* Subjects for 1st Year */}
                {formik.values.class === "1st-year" && (
                  <>
                    <option
                      value='[
                        "English",
                        "Urdu",
                        "Physics",
                        "Chemistry",
                        "IS",
                        "Biology"
                      ]'
                    >
                      FSc(Pre-Medical)
                    </option>
                    <option
                      value='[
                        "English",
                        "Urdu",
                        "Physics",
                        "Chemistry",
                        "IS",
                        "Maths"
                      ]'
                    >
                      FSc(Pre-Engineering)
                    </option>
                    <option
                      value='[
                        "English",
                        "Urdu",
                        "Physics",
                        "Computer",
                        "IS",
                        "Maths"
                      ]'
                    >
                      ICS
                    </option>
                    <option value='["English","Urdu","Economics","Principle of Commerce","IS","Business Mathematics","Principles of  Accounting"]'>
                      I.Com
                    </option>
                  </>
                )}
                {/* Subjects for 2nd Year */}
                {formik.values.class === "2nd-year" && (
                  <>
                    <option
                      value='[
                        "English",
                        "Urdu",
                        "Physics",
                        "Chemistry",
                        "PS",
                        "Biology"
                      ]'
                    >
                      FSc(Pre-Medical)
                    </option>
                    <option
                      value='[
                        "English",
                        "Urdu",
                        "Physics",
                        "Chemistry",
                        "PS",
                        "Maths"
                      ]'
                    >
                      FSc(Pre-Engineering)
                    </option>
                    <option
                      value='[
                        "English",
                        "Urdu",
                        "Physics",
                        "Computer",
                        "PS",
                        "Maths"
                      ]'
                    >
                      ICS
                    </option>
                    <option value='["English", "Urdu","Commercial Geography","Principles of Banking","Business Statistics","Principles of Accounting","PS"]'>
                      I.Com
                    </option>
                  </>
                )}
              </select>{" "}
              {formik.errors.subjects && (
                <div className="text-center fw-bold text-danger">
                  {formik.errors.subjects}
                </div>
              )}
            </div>

            <div className="col-12 fw-bold text-center mt-4">
              <button
                type="submit"
                className="btn btn-outline-dark px-5 fw-bold"
                disabled={buttonLoader}
              >
                {buttonLoader ? <ButtonLoader size={13.5} /> : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
