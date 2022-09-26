import {
  CREATE_NEWS,
  DELETE_NEWS,
  FETCH_NEWS,
  UPDATE_NEWS,
} from "../types/constants";
import {
  collection,
  addDoc,
  doc,
  setDoc,
  query,
  getDocs,
  getDoc,
  orderBy,
  deleteDoc,
  where,
} from "firebase/firestore/lite";
import { db } from "./../../config/firebase";
export const createNews = (data, setButtonLoader) => async (dispatch) => {
  try {
    setButtonLoader(true);
    const docRef = await addDoc(collection(db, "news"), {
      newsTitle: data,
    });
    await setDoc(
      doc(db, "news", docRef.id),
      {
        uid: docRef.id,
        createdAt: new Date(),
      },
      { merge: true }
    );
    let news = {
      newsTitle: data,
      uid: docRef.id,
    };
    dispatch({
      type: CREATE_NEWS,
      payload: news,
    });
    window.notify("News has been successfully added.", "success");
  } catch (error) {
    window.notify(error.message, "error");
  } finally {
    setButtonLoader(false);
  }
};
export const fetchNews = () => async (dispatch) => {
  let array = [];
  try {
    const q = query(collection(db, "news"), orderBy("createdAt"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      array.push(data);
    });
    dispatch({
      type: FETCH_NEWS,
      payload: array,
    });
  } catch (error) {
    window.notify(error.message, "error");
  }
};
export const deleteNews = (uid, setDeleteLoader) => async (dispatch) => {
  try {
    setDeleteLoader(true);
    await deleteDoc(doc(db, "news", uid));
    dispatch({
      type: DELETE_NEWS,
      payload: uid,
    });
    window.notify("News is successfully deleted.", "success");
  } catch (error) {
    window.notify(error.message, "error");
  } finally {
    setDeleteLoader(false);
  }
};
export const updateNews =
  (newsTitle, newsUID, setButtonLoader) => async (dispatch) => {
    try {
      setButtonLoader(true);
      await setDoc(
        doc(db, "news", newsUID),
        {
          newsTitle: newsTitle,
          updatedAt: new Date(),
        },
        { merge: true }
      );
      let updatedNews = {
        newsTitle: newsTitle,
        updatedAt: new Date(),
        uid: newsUID,
      };
      dispatch({
        type: UPDATE_NEWS,
        payload: updatedNews,
      });
    } catch (error) {
      window.notify(error.message, "error");
    } finally {
      setButtonLoader(false);
    }
  };
