const MODAL_ACTION_FIRST = "MODAL_ACTION_FIRST";
const MODAL_ACTION_SECOND = "MODAL_ACTION_SECOND";
const MODAL_ACTION_THREE = "MODAL_ACTION_THREE";

const initialState = {
  modal1: false,
  modal2: false,
  modal3: false,
};

export const Modalreduser = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_ACTION_FIRST:
      return { ...state, modal1: action.payload };
    case MODAL_ACTION_SECOND:
      return { ...state, modal2: action.payload };
    case MODAL_ACTION_THREE:
      return { ...state, modal3: action.payload };

    default:
      return state;
  }
};

export const modalAction1 = (payload) => ({
  type: MODAL_ACTION_FIRST,
  payload,
});
export const modalAction2 = (payload) => ({
  type: MODAL_ACTION_SECOND,
  payload,
});
export const modalAction3 = (payload) => ({
  type: MODAL_ACTION_THREE,
  payload,
});