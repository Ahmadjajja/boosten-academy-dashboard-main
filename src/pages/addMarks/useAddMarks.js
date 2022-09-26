import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import {
  fetchClassSubjectsSpecified,
  uploadMarks,
} from "./../../store/actions/marksAction";
const useAddMarks = () => {
  const [fetchLoader, setFetchLoader] = useState(false);
  const [buttonLoader, setButtonLoader] = useState(false);
  const dispatch = useDispatch();
  //Fetching data from store
  const students = useSelector(
    (store) => store.marksReducer.studentsToAddMarks
  );
  const subjectsList = useSelector((store) => store.marksReducer.subjects);
  // Creating required Variables
  const [studentsList, setStudentsList] = useState([]);
  const [testNo, setTestNo] = useState("");
  const subjectsObject = {};
  let totalMarks = useRef({});
  let obtainedMarksList = useRef([]);
  /**
   * It takes an object, a key, and a value, and sets the value of the key in the object to the value.
   * @param object - The object you want to update
   * @param key - The key of the object you want to update.
   * @param value - The value to be updated.
   */
  const updateObject = (object, key, value) => {
    object[key] = value || 0;
  };
  useEffect(() => {
    setStudentsList(students);
  }, [students]);
  useEffect(() => {
    subjectsList.forEach((subject) => {
      updateObject(subjectsObject, subject);
    });
    totalMarks.current = subjectsObject;
    obtainedMarksList.current = students.map(() => {
      return subjectsObject;
    });
  }, [subjectsList, students]);

  const onChangeHandlerForTotalMarks = (e) => {
    totalMarks.current = {
      ...totalMarks.current,
      [e.target.name]: parseInt(e.target.value),
    };
  };
  const onChangeHandlerForObtainedMarks = (e, i) => {
    obtainedMarksList.current = obtainedMarksList.current.map(
      (obtainedMark, index) => {
        if (i === index) {
          const updatedMark = {
            ...obtainedMark,
            [e.target.name]: parseInt(e.target.value),
          };
          return updatedMark;
        } else {
          return obtainedMark;
        }
      }
    );
  };
  const onMarksSubmitHandler = () => {
    if (testNo !== "") {
      let studentsObtainedMarks = studentsList.map((student, index) => {
        return {
          studentId: student.uid,
          rollNo: student.rollNo,
          totalMarks: totalMarks.current,
          obtainedMarks: obtainedMarksList.current[index],
          testNo: parseInt(testNo),
        };
      });
      console.log("====================================");
      console.log(studentsObtainedMarks);
      console.log("====================================");
      dispatch(uploadMarks(studentsObtainedMarks, setButtonLoader));
    } else {
      window.notify("Add test number please!", "error");
    }
  };
  const formik = useFormik({
    initialValues: {
      class: "",
      subjects: "",
    },
    validationSchema: yup.object({
      class: yup.string().min(3).required("Required"),
    }),
    onSubmit: (values) => {
      if (values.class !== "" && values.subjects !== "") {
        dispatch(fetchClassSubjectsSpecified(values, setFetchLoader));
      } else {
        window.notify(
          "Please! Select a class and relevant subjects to that class.",
          "warning"
        );
      }
      values.class = "";
      values.subjects = "";
    },
    onReset: (values) => {
      values.class = "";
      values.subjects = "";
    },
  });
  return {
    formik,
    fetchLoader,
    studentsList,
    subjectsList,
    setTestNo,
    onChangeHandlerForTotalMarks,
    onChangeHandlerForObtainedMarks,
    onMarksSubmitHandler,
    buttonLoader,
  };
};

export default useAddMarks;
