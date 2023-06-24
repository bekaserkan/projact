const initialState = {
  plays: [],
  error: null,
  loading: false,
};

export const PlayReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLAY:
      return { ...state, loading: true };
    case FETCH_PLAY_SUCCESS:
      return { ...state, loading: false, plays: action.payload };
    case FETCH_PLAY_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const FETCH_PLAY = "FETCH_PLAY";
export const FETCH_PLAY_ERROR = "FETCH_PLAY_ERROR";
export const FETCH_PLAY_SUCCESS = "FETCH_PLAY_SUCCESS";
