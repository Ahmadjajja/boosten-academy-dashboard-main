import {
  query,
  collection,
  where,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore/lite";
import { FETCH_STUDENT } from "./../types/constants";
import { db } from "./../../config/firebase";
export const fetchClassSubjectsSpecified =
  (data, setFetchLoader) => async (dispatch) => {
    try {
      setFetchLoader(true);
      let array = [];
      const q = query(
        collection(db, "students"),
        where("subjects", "==", data.subjects)
      );
      let subjects = JSON.parse(data.subjects);
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        array.push(data);
      });
      if (data.class === "9th" || data.class === "10th") {
        array = array.filter((student) => student.class === data.class);
      }
      array = array.sort((a, b) => a.rollNo - b.rollNo);
      let students = {
        studentsSubjects: subjects,
        studentsArray: array,
      };
      if (array.length > 0) {
        dispatch({
          type: FETCH_STUDENT,
          payload: students,
        });
      } else {
        window.notify(`You have no students available in this class.`, "info");
      }
    } catch (error) {
      window.notify(error.message, "error");
    } finally {
      setFetchLoader(false);
    }
  };
export const uploadMarks = (data, setButtonLoader) => async (dispatch) => {
  try {
    setButtonLoader(true);
    await data.forEach((studentObtainedMarks) => {
      setDoc(
        doc(db, "marks", studentObtainedMarks.studentId),
        {
          [studentObtainedMarks.testNo]: studentObtainedMarks,
        },
        { merge: true }
      );
    });
    window.notify(
      "Marks has been successfully updated on the portal.",
      "success"
    );
  } catch (error) {
    window.notify(error.message, "error");
  } finally {
    setButtonLoader(false);
  }
};
