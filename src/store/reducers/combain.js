import { combineReducers } from "redux";
import {Modalreduser} from "./modalReducers"
import { ModalSecond } from "./modalSecond";

export const rootReducer = combineReducers({
  modals: Modalreduser,
  modalsSecond: ModalSecond,
});
