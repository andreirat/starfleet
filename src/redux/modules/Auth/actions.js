import * as api from './api';
import actions from './actionCreators';
// import jwtDecode from 'jwt-decode';
import history from '../../../history';

const mockuser = {
    first_name: "Andrei",
    last_name: "Rat",
    email: "test@starfleet.co",
    password: "starfleet"
};

export const signin = (email, password) => dispatch => {
  dispatch(actions.signin.pending());

  setTimeout(() => {
      dispatch(actions.signin.success({token: "232196gjggf7fewf237f", user: mockuser}))
      history.push("/")
  }, 1000)
  // api
  //   .signin(email, password)
  //   .then(
  //     res => {
  //       console.log(res);
  //       if(res.body.success && res.body.success === false){
  //         dispatch(actions.signin.error(res.body));
  //       }else {
  //         let user = jwtDecode(res.body.token);
  //         let current = {
  //           token: res.body.token,
  //           user: user
  //         };
  //         dispatch(
  //           actions.signin.success(current),
  //         );
  //         history.push('/');
  //       }
  //     }
  //   )
  //   .catch(
  //     err => {
  //       console.log(err);
  //       dispatch(actions.signin.error(err));
  //     }
  //   );
};

export const signout = (redirect = true) => dispatch => {
  dispatch(actions.signout.pending());
  api
    .signout()
    .then(data => {
      dispatch(actions.signout.success(data));
      if (redirect) {
        history.push('/');
      }
    })
    .catch(error => dispatch(actions.signout.error(error)));
};


