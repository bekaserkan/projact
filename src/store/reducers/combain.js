import { combineReducers } from "redux";
import {Modalreduser} from "./modalReducers"
import { ModalSecond } from "./modalSecond";
import { TodoReducer } from "./battleReducer";

export const rootReducer = combineReducers({
  modals: Modalreduser,
  modalsSecond: ModalSecond,
  todo: TodoReducer,
});
