const initialState = {
  news: [],
  page: 1,
  error: null,
  loading: false,
};

export const NewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return { ...state, loading: true };
    case FETCH_NEWS_SUCCESS:
      return { ...state, loading: false, news: action.payload };
    case FETCH_NEWS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case SET_NEWS_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};

export const FETCH_NEWS = "FETCH_NEWS";
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
export const FETCH_NEWS_ERROR = "FETCH_NEWS_ERROR";
export const SET_NEWS_PAGE = "SET_NEWS_PAGE";
