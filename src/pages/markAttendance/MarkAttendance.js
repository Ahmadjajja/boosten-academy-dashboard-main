import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import useMarkAttendance from "./useMarkAttendance";
import ButtonLoader from "../../components/buttonLoader/ButtonLoader";
const MarkAttendance = () => {
  const {
    fetchLoader,
    setToday,
    fetchStudents,
    onChangeHandler,
    markAllAsPresent,
    studentList,
    markAllAsAbsent,
    buttonLoader,
    uploadAttendance,
  } = useMarkAttendance();

  return (
    <div style={{ minHeight: "100vh" }} className="d-flex flex-column">
      <header>
        <Navbar />
      </header>
      <main>
        <div className="text-center mt-5">
          {fetchLoader ? (
            <div
              className="container-fluid d-flex justify-content-center align-items-center"
              style={{
                minHeight: "35vh",
              }}
            >
              <ButtonLoader />
            </div>
          ) : studentList.length > 0 ? (
            <div className="container">
              <h1 className="display-3">Mark Attendance</h1>
              <div className="row d-flex justify-content-evenly ">
                <div className="card col-5 d-flex flex-row p-2">
                  <div className="col-12">
                    <label htmlFor="date" className="p-0 fs-5">
                      Select Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      onChange={(e) => setToday(e.target.value)}
                      id="date"
                    />
                  </div>
                </div>
                <div className="card col-5 mx-3 d-flex flex-row justify-content-center align-items-end p-2">
                  <div className="col-6">
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={markAllAsPresent}
                    >
                      Mark All as Present
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={markAllAsAbsent}
                    >
                      Mark All as Absent
                    </button>
                  </div>
                </div>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" className="text-center">
                      #
                    </th>
                    <th scope="col" className="text-center">
                      Student Name
                    </th>
                    <th scope="col" className="text-center">
                      Father Name
                    </th>
                    <th scope="col" className="text-center">
                      Roll No.
                    </th>

                    <th scope="col" className="text-center">
                      Attendance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {studentList.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="text-center">{index + 1}</td>
                        <td className="text-center">{item.name}</td>
                        <td className="text-center">{item.fatherName}</td>
                        <td className="text-center">{item.rollNo}</td>
                        <td className="text-center">
                          <div className="form-check d-flex align-items-center justify-center">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                checked={item?.isPresent || false}
                                onChange={(e) =>
                                  onChangeHandler(e, item.rollNo)
                                }
                                id={item.rollNo}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={item.rollNo}
                              >
                                Present
                              </label>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="row">
                <div className="col my-3">
                  {buttonLoader ? (
                    <button
                      className="btn btn-primary px-3"
                      disabled={buttonLoader}
                    >
                      <ButtonLoader color={"white"} size={13} />
                    </button>
                  ) : (
                    <button
                      className="btn btn-outline-primary"
                      onClick={uploadAttendance}
                    >
                      Submit Attendance
                    </button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="col text-center my-4">
              <button
                type="submit"
                className="btn btn-outline-dark"
                onClick={fetchStudents}
              >
                Fetch Students
              </button>
            </div>
          )}
        </div>
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default MarkAttendance;
