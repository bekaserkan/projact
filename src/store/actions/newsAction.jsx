import axios from "axios";
import {
  FETCH_NEWS,
  FETCH_NEWS_ERROR,
  FETCH_NEWS_SUCCESS,
  SET_NEWS_PAGE,
} from "../reducers/newsReducer";

export const fetchNews = (page = 1) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_NEWS });
      const response = await axios.get(
        `https://647ce174c0bae2880ad14bc3.mockapi.io/play_join?page=${page}&limit=4`
      );
      dispatch({
        type: FETCH_NEWS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_NEWS_ERROR,
        payload: "Произошла ошибка при загрузке...",
      });
    }
  };
};

export function setNewsPage(page) {
  return { type: SET_NEWS_PAGE, payload: page };
}
