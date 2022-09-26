import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  createAttendance,
  readAllStudents,
} from "../../store/actions/attendanceAction";
import { useSelector } from "react-redux";
const useMarkAttendance = () => {
  const [fetchLoader, setFetchLoader] = useState(false);
  const [buttonLoader, setButtonLoader] = useState(false);
  const students = useSelector((store) => store.attendanceReducer.studentsList);
  const [today, setToday] = useState(new Date());
  const [studentList, setStudentList] = useState([]);
  useEffect(() => {
    setStudentList(students);
  }, [students]);

  const dispatch = useDispatch();
  const fetchStudents = () => {
    dispatch(readAllStudents(setFetchLoader));
  };
  const onChangeHandler = (e, studentId) => {
    const { checked } = e.target;
    let tempAttendance = studentList.map((student) =>
      student.rollNo === studentId
        ? { ...student, isPresent: checked }
        : student
    );
    setStudentList(tempAttendance);
  };
  const markAllAsPresent = () => {
    if (today !== null) {
      let tempAttendance = studentList.map((student) => {
        return { ...student, isPresent: true };
      });
      setStudentList(tempAttendance);
    } else {
      window.notify("Please select the date first.", "error");
    }
  };
  const markAllAsAbsent = () => {
    if (today !== null) {
      let tempAttendance = studentList.map((student) => {
        return { ...student, isPresent: false };
      });
      setStudentList(tempAttendance);
    } else {
      window.notify("Please select the date first.", "error");
    }
  };
  const uploadAttendance = () => {
    if (today !== null) {
      let studentsAttendanceList = studentList.map((student) => {
        return {
          attendanceStatus: student.isPresent,
          attendanceDate: today,
          studentId: student.uid,
        };
      });

      dispatch(createAttendance(studentsAttendanceList, setButtonLoader));
    } else {
      window.notify("Please select the date first.", "error");
    }
  };

  return {
    fetchLoader,
    fetchStudents,
    setToday,
    onChangeHandler,
    markAllAsPresent,
    studentList,
    markAllAsAbsent,
    buttonLoader,
    uploadAttendance,
  };
};

export default useMarkAttendance;
