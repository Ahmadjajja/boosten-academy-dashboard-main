import React from "react";
import Navbar from "./../../components/navbar/Navbar";
import Footer from "./../../components/footer/Footer";
import useNews from "./useNews";
import { useSelector } from "react-redux";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import ButtonLoader from "./../../components/buttonLoader/ButtonLoader";
const News = () => {
  const {
    buttonLoader,
    news,
    onSubmitHandler,
    onChangeHandler,
    onDeleteHandler,
    onUpdateHandler,
    isUpdate,
    onCTAUpdate,
    deleteLoader,
  } = useNews();
  const newsList = useSelector((store) => store.newsReducer.news);
  return (
    <div className="d-flex d-flex flex-column" style={{ minHeight: "100vh" }}>
      <header>
        <Navbar />
      </header>
      <div
        style={{
          minHeight: "80vh",
        }}
        className="container text-center d-flex flex-column justify-content-center "
      >
        <div className="row">
          <div className="col card border border-dark">
            <h1 className="display-4">Add News</h1>
            <form>
              <div className="d-flex">
                <label htmlFor="news" className="py-2">
                  Add News Message
                </label>
                <input
                  type="Textarea"
                  className="form-control form-control-lg"
                  name="news"
                  id=""
                  value={news}
                  onChange={(e) => onChangeHandler(e)}
                />
              </div>
              {isUpdate ? (
                buttonLoader ? (
                  <button
                    type="button"
                    className="btn btn-dark my-3"
                    disabled={buttonLoader}
                  >
                    <ButtonLoader color="white" size={13} />
                  </button>
                ) : (
                  <button
                    className="btn btn-dark my-3"
                    onClick={(e) => {
                      onCTAUpdate(e);
                    }}
                  >
                    Update
                  </button>
                )
              ) : buttonLoader ? (
                <button className="btn btn-dark my-3" disabled={buttonLoader}>
                  <ButtonLoader color="white" size={13} />
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn btn-dark my-3"
                  onClick={(e) => onSubmitHandler(e)}
                >
                  Add News
                </button>
              )}
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col card mt-1 border border-dark">
            <h3 className="display-6 fs-3 text-underline">
              <u>News List</u>
            </h3>
            {newsList.length > 0 ? (
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>News</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {newsList.map((news, i) => {
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{news.newsTitle}</td>
                        <td className="text-center">
                          <button
                            className="btn btn-outline-primary"
                            onClick={() => onUpdateHandler(news)}
                          >
                            <AiFillEdit />
                          </button>
                          {deleteLoader ? (
                            <button
                              disabled={deleteLoader}
                              className="btn btn-danger"
                            >
                              <ButtonLoader color="white" />
                            </button>
                          ) : (
                            <button
                              className="btn btn-outline-danger mx-2"
                              onClick={() => {
                                onDeleteHandler(news.uid);
                              }}
                            >
                              <AiFillDelete />
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <span className="fs-3">You had no news added.</span>
            )}
          </div>
        </div>
      </div>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default News;
