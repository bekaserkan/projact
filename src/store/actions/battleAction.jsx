import axios from "axios";
import {
  FETCH_TODOS,
  FETCH_TODOS_ERROR,
  FETCH_TODOS_SUCCESS,
  SET_TODO_PAGE,
} from "../reducers/battleReducer";

export const fetchTodos = (page = 1) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_TODOS });
      const response = await axios.get(
        `https://647ce174c0bae2880ad14bc3.mockapi.io/play_dota?page=${page}&limit=9`,
      );
      dispatch({
        type: FETCH_TODOS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_TODOS_ERROR,
        payload: "Произошла ошибка при загрузке списка дел",
      });
    }
  };
};

export function setTodoPage(page) {
  return { type: SET_TODO_PAGE, payload: page };
}
