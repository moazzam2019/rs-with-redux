import { compose, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

// basically we are sending middlewares as the 3rd argument but it wont run without compose and applymiddleware method, it enhances our store

export const store = createStore(rootReducer, undefined, composedEnhancers);
