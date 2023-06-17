import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/combain";


export const store = createStore(rootReducer, applyMiddleware(thunk))