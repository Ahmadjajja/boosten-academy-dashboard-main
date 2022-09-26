import { LOGIN, LOGOUT } from "../types/constants";
import { auth, db } from "./../../config/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore/lite";

export const login = (data, setIsProcessing) => async (dispatch) => {
  try {
    setIsProcessing(true);
    await signInWithEmailAndPassword(auth, data.email, data.password);
    let user = auth.currentUser;
    const docSnap = await getDoc(doc(db, "admins", user.uid));
    let userData = docSnap.data();
    if (!userData) {
      signOut(auth);
      dispatch({ type: LOGOUT });
      setIsProcessing(false);
      window.notify(
        "You're not allowed to login.Please! contact management for further details.",
        "warning"
      );
    } else {
      localStorage.setItem("user", JSON.stringify(userData));
      if (docSnap.exists()) {
        dispatch({
          type: LOGIN,
          payload: userData,
        });
      }
      setIsProcessing(false);
      let result = window.confirm("You want to keep this user signed in?");
      if (result) {
        localStorage.setItem(
          "userCredentials",
          JSON.stringify({ email: data.email, password: data.password })
        );
        window.notify("User have been successfully signed in", "success");
      } else {
        window.notify(
          "You have to resign in your account when you refresh the web",
          "warning"
        );
      }
    }
  } catch (error) {
    const errorMessage = error.message;
    window.notify(errorMessage, "error");
  } finally {
    setIsProcessing(false);
  }
};
export const logout = () => async (dispatch) => {
  try {
    await signOut(auth);
    localStorage.removeItem("user");
    localStorage.removeItem("userCredentials");
    window.notify("User have been successfully logged out", "success");
    dispatch({
      type: LOGOUT,
    });
  } catch (error) {}
};
export const fetchUser = (data) => {
  return {
    type: LOGIN,
    payload: data,
  };
};
