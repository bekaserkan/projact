export const MODAL_ACTION = "MODAL_ACTION";
export const MODAL_ACTION_FIRST = "MODAL_ACTION_FIRST";
export const MODAL_ACTION_SECOND = "MODAL_ACTION_SECOND";
export const MODAL_ACTION_THREE = "MODAL_ACTION_THREE";
export const ACTIVE_ACTION_ONE = "ACTIVE_ACTION_ONE";
export const ACTIVE_ACTION_THREE = "ACTIVE_ACTION_THREE";
export const ACTIVE_ACTION_FIFE = "ACTIVE_ACTION_FIFE";

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
