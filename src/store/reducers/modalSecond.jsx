import {
  MODAL_ACTION_FIFE,
  MODAL_ACTION_FOUR,
  MODAL_ACTION_SIX,
  MODAL_REVIEW_ACTION,
} from "../actions/modalSecond";

const initialState = {
  modal4: false,
  modal5: false,
  modal6: false,
  modalReview: false,
};

export const ModalSecond = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_ACTION_FOUR:
      return { ...state, modal4: action.payload };
    case MODAL_ACTION_FIFE:
      return { ...state, modal5: action.payload };
    case MODAL_ACTION_SIX:
      return { ...state, modal6: action.payload };
    case MODAL_REVIEW_ACTION:
      return { ...state, modalReview: action.payload };

    default:
      return state;
  }
};
