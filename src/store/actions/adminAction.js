import {
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "./../../config/firebase";
import {
  FETCH_ALL_ADMINS,
  LOGIN,
  LOGOUT,
  DELETE_ADMINS,
  UPDATE_ADMINS,
  CREATE_ADMINS,
} from "../types/constants";
import {
  doc,
  setDoc,
  getDocs,
  deleteDoc,
  where,
  query,
  collection,
} from "firebase/firestore/lite";

export const addAdmin =
  (data, setLoader, adminSignedIn) => async (dispatch) => {
    try {
      setLoader(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      let userData = userCredential.user;
      updateProfile(userData, {
        displayName: data.name,
      });
      try {
        await setDoc(doc(db, "admins", userData.uid), {
          name: data.name,
          fatherName: data.fatherName,
          address: data.address,
          uid: userData.uid,
          email: data.email,
          password: data.password,
          role: data.role,
        });
      } catch (error) {
        window.notify(error.message, "error");
      }

      try {
        await signOut(auth);
        dispatch({
          type: LOGOUT,
        });
      } catch (error) {
        window.notify(error.message, "error");
      }
      try {
        await signInWithEmailAndPassword(
          auth,
          adminSignedIn.email,
          adminSignedIn.password
        );
        dispatch({
          type: LOGIN,
          payload: adminSignedIn,
        });
      } catch (error) {
        window.notify(error.message, "error");
      }
      dispatch({
        type: CREATE_ADMINS,
        payload: {
          name: data.name,
          fatherName: data.fatherName,
          address: data.address,
          uid: userData.uid,
          email: data.email,
          password: data.password,
          role: data.role,
        },
      });
      window.notify("New admin has been created.", "success");
    } catch (error) {
      const errorMessage = error.message;
      window.notify(errorMessage, "error");
    } finally {
      setTimeout(() => {
        setLoader(false);
      }, 1000);
    }
  };
export const readAdmin = (setFetchLoader) => async (dispatch) => {
  try {
    setFetchLoader(true);
    let array = [];
    const q = query(collection(db, "admins"), where("role", "==", "admin"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      array.push(data);
    });
    if (array.length > 0) {
      dispatch({
        type: FETCH_ALL_ADMINS,
        payload: array,
      });
    } else {
      window.notify(
        "You have no admins available.Please add them via clicking on the button 👈🏻",
        "info"
      );
    }
  } catch (error) {
    window.notify(error.message, "error");
  } finally {
    setTimeout(() => setFetchLoader(false), 2500);
  }
};
export const deleteAdmin = (data, setButtonLoader) => async (dispatch) => {
  try {
    setButtonLoader(true);
    await deleteDoc(doc(db, "admins", data));
    dispatch({
      type: DELETE_ADMINS,
      payload: data,
    });
  } catch (error) {
    window.notify(error.message, "error");
  } finally {
    setTimeout(() => setButtonLoader(false), 500);
  }
};
export const adminUpdate =
  (data, setUpdateButtonLoader) => async (dispatch) => {
    try {
      setUpdateButtonLoader(true);
      const updateAdminRef = doc(db, "admins", data.uid);
      await setDoc(
        updateAdminRef,
        {
          name: data.name,
          fatherName: data.fatherName,
          email: data.email,
          address: data.address,
        },
        { merge: true }
      );
      dispatch({
        type: UPDATE_ADMINS,
        payload: data,
      });
      window.notify("Admin has been successfully updated!", "success");
    } catch (error) {
      window.notify(error.message, "error");
    } finally {
      setUpdateButtonLoader(false);
    }
  };
