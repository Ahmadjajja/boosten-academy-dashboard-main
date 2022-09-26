import { DELETE_STUDENTS, FETCH_STUDENT } from "./../types/constants";

let initialState = {
  studentsList: [],
};
const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDENT: {
      let newStudentList = action.payload;
      newStudentList = newStudentList.sort((a, b) => a.rollNo - b.rollNo);
      return {
        ...state,
        studentsList: newStudentList,
      };
    }
    case DELETE_STUDENTS: {
      let newStudentList = state.studentsList.filter(
        (student) => student.uid !== action.payload
      );
      return {
        ...state,
        studentsList: newStudentList,
      };
    }
    default:
      return state;
  }
};

export default studentReducer;
