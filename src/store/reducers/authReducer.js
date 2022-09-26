import { LOGIN, LOGOUT } from "../types/constants";

let initialState = {
  isUserAuthenticated: false,
  adminSignedIn: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      let isUserAuthenticatedNow = true;
      let user = action.payload;
      return {
        ...state,
        isUserAuthenticated: isUserAuthenticatedNow,
        adminSignedIn: user,
      };
    }
    case LOGOUT: {
      let isUserAuthenticatedNow = false;
      return {
        ...state,
        isUserAuthenticated: isUserAuthenticatedNow,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
