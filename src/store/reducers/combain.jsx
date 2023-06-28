import { combineReducers } from "redux";
import { Modalreduser } from "./modalReducers";
import { ModalSecond } from "./modalSecond";
import { TodoReducer } from "./battleReducer";
import { PlayReducer } from "./playReducer";
import { JoinReducer } from "./joinReducer";
import { NewsReducer } from "./newsReducer";
import { PrivateDiv } from "./privateDivReducer";

export const rootReducer = combineReducers({
  modals: Modalreduser,
  modalsSecond: ModalSecond,
  todo: TodoReducer,
  play: PlayReducer,
  join: JoinReducer,
  news: NewsReducer,
  div: PrivateDiv,
});
