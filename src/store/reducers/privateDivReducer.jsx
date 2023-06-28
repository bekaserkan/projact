const initialState = {
  div1: false,
  div2: true,
};

export const PrivateDiv = (state = initialState, action) => {
  switch (action.type) {
    case PRIVATE_DIV_ONE:
      return { ...state, div1: action.payload };
    case PRIVATE_DIV_TWO:
      return { ...state, div2: action.payload };
    default:
      return state;
  }
};

export const PRIVATE_DIV_ONE = "PRIVATE_DIV_ONE";
export const PRIVATE_DIV_TWO = "PRIVATE_DIV_TWO";

export const privateDiv1Action = (payload) => ({
  type: PRIVATE_DIV_ONE,
  payload,
});
export const privateDiv2Action = (payload) => ({
  type: PRIVATE_DIV_TWO,
  payload,
});
