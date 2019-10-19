import { createStore, applyMiddleware } from 'redux';
import { createLogger } from "redux-logger";
import thunk from 'redux-thunk';
import rootReducer from "./rootReducer";
import promiseMiddleware from "./promiseMiddleware"
import { IS_DEVELOPMENT } from '../config';
import { routerMiddleware } from 'react-router-redux'
import { BrowserRouter } from 'react-router-dom'

const logger = createLogger({
  collapsed: true,
  logger: console
});

const a = IS_DEVELOPMENT ?  applyMiddleware(promiseMiddleware, thunk, logger, routerMiddleware(BrowserRouter)) : applyMiddleware(promiseMiddleware, thunk);
const store = createStore(
  rootReducer,
  a
);

export default store;
