const initialState = {
  joins: [],
  page: 1,
  error: null,
  loading: false,
};

export const JoinReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOIN:
      return { ...state, loading: true };
    case FETCH_JOIN_SUCCESS:
      return { ...state, loading: false, joins: action.payload };
    case FETCH_JOIN_ERROR:
      return { ...state, loading: false, error: action.payload };
    case SET_JOIN_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};

export const FETCH_JOIN = "FETCH_JOIN";
export const FETCH_JOIN_SUCCESS = "FETCH_JOIN_SUCCESS";
export const FETCH_JOIN_ERROR = "FETCH_JOIN_ERROR";
export const SET_JOIN_PAGE = "SET_JOIN_PAGE";
