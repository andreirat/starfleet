import {createSelector} from 'reselect';
const entity = 'Auth';

/* Memoized Input Selectors */
export const token = (state) => {
  return state.Auth.impersonateLogin.token || state.Auth.user.token;
};

export const currentUser = (state) => {
  if (state.Auth.user.token) {
    return state.Auth.user.data;
  }
  return null;
};
export const userData = createSelector([state => state[entity].user.data], val => val);
export const loginError = createSelector([state => state[entity].error], val => val);
export const success = createSelector([state => state[entity].success], val => val);
export const isLoading = createSelector([state => state[entity].isLoading], val => val);
