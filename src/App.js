import React, { useState, useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Routing from "./routing/Routing";
import FullScreenLoader from "./components/fullScreenLoader/FullScreenLoader";
import { auth } from "./config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { fetchUser } from "./store/actions/authAction";
import { fetchNews } from "./store/actions/newsAction";
const App = () => {
  const dispatch = useDispatch();
  const [preLoader, setPreLoader] = useState(false);
  let userCredentials;
  userCredentials = JSON.parse(localStorage.getItem("userCredentials"));
  useEffect(() => {
    async function fetchData() {
      setPreLoader(true);
      try {
        if (userCredentials) {
          await signInWithEmailAndPassword(
            auth,
            userCredentials.email,
            userCredentials.password
          );
          dispatch(fetchUser(userCredentials));
          dispatch(fetchNews());
        }
      } catch (error) {
        window.notify(error.message, "error");
      } finally {
        setTimeout(() => {
          setPreLoader(false);
        }, 2500);
      }
    }
    fetchData();
  }, [dispatch]);

  return <div>{preLoader ? <FullScreenLoader /> : <Routing />}</div>;
};

export default App;
