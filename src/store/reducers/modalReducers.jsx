import {
  MODAL_ACTION,
  ACTIVE_ACTION_FIFE,
  ACTIVE_ACTION_ONE,
  ACTIVE_ACTION_THREE,
  MODAL_ACTION_FIRST,
  MODAL_ACTION_SECOND,
  MODAL_ACTION_THREE,
} from "../actions/modalActions";

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
