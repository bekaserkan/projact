const MODAL_ACTION_FOUR = "MODAL_ACTION_FOUR";
const MODAL_ACTION_FIFE = "MODAL_ACTION_FIFE";
const MODAL_ACTION_SIX = "MODAL_ACTION_SIX";
const MODAL_REVIEW_ACTION = "MODAL_REVIEW_ACTION";

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

export const modalReviewAction = (payload) => ({
  type: MODAL_REVIEW_ACTION,
  payload,
});
export const modalAction4 = (payload) => ({
  type: MODAL_ACTION_FOUR,
  payload,
});
export const modalAction5 = (payload) => ({
  type: MODAL_ACTION_FIFE,
  payload,
});
export const modalAction6 = (payload) => ({
  type: MODAL_ACTION_SIX,
  payload,
});
