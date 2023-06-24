import axios from "axios";
import {
  FETCH_JOIN,
  FETCH_JOIN_ERROR,
  FETCH_JOIN_SUCCESS,
  SET_JOIN_PAGE,
} from "../reducers/joinReducer";

export const fetchJoin = (page = 1) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_JOIN });
      const response_join = await axios.get(
        `https://647ce174c0bae2880ad14bc3.mockapi.io/play_join?page=${page}&limit=6`
      );
      dispatch({
        type: FETCH_JOIN_SUCCESS,
        payload: response_join.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_JOIN_ERROR,
        payload: "Произошла ошибка при загрузке...",
      });
    }
  };
};

export function setJoinPage(page) {
  return { type: SET_JOIN_PAGE, payload: page };
}
