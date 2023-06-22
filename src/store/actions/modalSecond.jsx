export const MODAL_ACTION_FOUR = "MODAL_ACTION_FOUR";
export const MODAL_ACTION_FIFE = "MODAL_ACTION_FIFE";
export const MODAL_ACTION_SIX = "MODAL_ACTION_SIX";
export const MODAL_REVIEW_ACTION = "MODAL_REVIEW_ACTION";

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
