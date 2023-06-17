const MODAL_ACTION = "MODAL_ACTION";
const MODAL_ACTION_FIRST = "MODAL_ACTION_FIRST";
const MODAL_ACTION_SECOND = "MODAL_ACTION_SECOND";
const MODAL_ACTION_THREE = "MODAL_ACTION_THREE";
const ACTIVE_ACTION_ONE = "ACTIVE_ACTION_ONE";
const ACTIVE_ACTION_THREE = "ACTIVE_ACTION_THREE";
const ACTIVE_ACTION_FIFE = "ACTIVE_ACTION_FIFE";

const initialState = {
  modal: false,
  modal1: false,
  modal2: false,
  modal3: false,
  active1: "one",
  active2: "three",
  active3: "fife",
};

export const Modalreduser = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_ACTION:
      return { ...state, modal: action.payload };
    case MODAL_ACTION_FIRST:
      return { ...state, modal1: action.payload };
    case MODAL_ACTION_SECOND:
      return { ...state, modal2: action.payload };
    case MODAL_ACTION_THREE:
      return { ...state, modal3: action.payload };
    case ACTIVE_ACTION_ONE:
      return { ...state, active1: action.payload };
    case ACTIVE_ACTION_THREE:
      return { ...state, active2: action.payload };
    case ACTIVE_ACTION_FIFE:
      return { ...state, active3: action.payload };

    default:
      return state;
  }
};

export const activeAction1 = (payload) => ({
  type: ACTIVE_ACTION_ONE,
  payload,
});
export const activeAction2 = (payload) => ({
  type: ACTIVE_ACTION_THREE,
  payload,
});
export const activeAction3 = (payload) => ({
  type: ACTIVE_ACTION_FIFE,
  payload,
});
export const modalAction = (payload) => ({
  type: MODAL_ACTION,
  payload,
});
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
