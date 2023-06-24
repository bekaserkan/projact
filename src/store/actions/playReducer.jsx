import axios from "axios";
import {
  FETCH_PLAY,
  FETCH_PLAY_ERROR,
  FETCH_PLAY_SUCCESS,
} from "../reducers/playReducer";

export const fetchPlays = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_PLAY });
      const response = await axios.get(
        `https://647ce174c0bae2880ad14bc3.mockapi.io/play_dota`
      );
      dispatch({
        type: FETCH_PLAY_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_PLAY_ERROR,
        payload: "Произошла ошибка при загрузке...",
      });
    }
  };
};
