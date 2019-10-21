import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import Auth from '../redux/modules/Auth/reducer';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  Auth
});
export default createRootReducer