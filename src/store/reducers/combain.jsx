import { combineReducers } from "redux";
import { Modalreduser } from "./modalReducers";
import { ModalSecond } from "./modalSecond";
import { TodoReducer } from "./battleReducer";
import { PlayReducer } from "./playReducer";
import { JoinReducer } from "./joinReducer";

export const rootReducer = combineReducers({
  modals: Modalreduser,
  modalsSecond: ModalSecond,
  todo: TodoReducer,
  play: PlayReducer,
  join: JoinReducer,
});
