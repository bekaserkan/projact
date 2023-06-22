const initialState = {
  todos: [],
  page: 1,
  error: null,
  loading: false,
};

export const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state, loading: true };
    case FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, todos: action.payload };
    case FETCH_TODOS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case SET_TODO_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};


export const FETCH_TODOS = "FETCH_TODOS";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR";
export const SET_TODO_PAGE = "SET_TODO_PAGE";
