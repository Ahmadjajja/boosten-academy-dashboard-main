import {
  CREATE_NEWS,
  DELETE_NEWS,
  FETCH_NEWS,
  UPDATE_NEWS,
} from "../types/constants";

let initialState = {
  news: [],
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEWS: {
      let newNews = [...state.news, action.payload];
      return {
        ...state,
        news: newNews,
      };
    }
    case FETCH_NEWS: {
      let newNews = action.payload;
      return {
        ...state,
        news: newNews,
      };
    }
    case DELETE_NEWS: {
      let newNews = state.news.filter((news) => news.uid !== action.payload);
      return {
        ...state,
        news: newNews,
      };
    }
    case UPDATE_NEWS: {
      let newNews = state.news.map((item) => {
        if (item.uid === action.payload.uid) {
          return action.payload;
        } else {
          return item;
        }
      });
      return { news: newNews };
    }
    default: {
      return state;
    }
  }
};

export default newsReducer;
