import constants from './constants';

const emptyState = {
  user: {
    token: null,
    data: null
  },
  isAuthenticated: false,
  error: '',
  success: false,
  isLoading: false
};
const initialState = JSON.parse(localStorage.getItem('Auth')) || emptyState;

export default (state = initialState, action = {}) => {
  switch (action.type) {
  
  case constants.SIGNIN_SUCCESS : {
    console.log(action.payload);
    let newState = {
      ...state,
      user: {
        token: action.payload.token,
        data: action.payload.user
      },
      isAuthenticated: true,
      success: '',
      error: ''
    };

    localStorage.setItem('Auth', JSON.stringify(newState));
    return newState;
  }

  case constants.SIGNIN_ERROR: {
    const { message, success } = action.payload;
    return {
      ...state,
      success,
      error: message,
    };
  }
  
  case constants.SIGNOUT_SUCCESS: {
    let newState = {
      ...state,
      error: '',
    };

    if (state.impersonateLogin.token) {
      newState['impersonateLogin'] = {};
    } else if (state.userLogin.token) {
      newState['userLogin'] = {};
    }

    localStorage.setItem('Auth', JSON.stringify(newState));
    return newState;
  }
  

  default:
    return state;
  }
};
