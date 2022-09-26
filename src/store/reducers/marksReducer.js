import { FETCH_STUDENT } from "../types/constants";

let initialState = {
  studentsToAddMarks: [],
  subjects: [],
};

const marksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDENT: {
      let studentsList = action.payload.studentsArray;
      let studentsSubjects = action.payload.studentsSubjects;
      return {
        ...state,
        studentsToAddMarks: studentsList,
        subjects: studentsSubjects,
      };
    }
    default:
      return state;
  }
};

export default marksReducer;
