import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { images } from '../../helpers/images';

import AuthState from '../../redux/modules/Auth';

class Login extends Component {
  
  constructor(props){
    super(props);
    
    this.submitForm = this.submitForm.bind(this);
    this.changeField = this.changeField.bind(this);
    
    this.state = {
      email: "",
      password: ""
    }
  }
  
  submitForm(event) {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.login(email, password)
  }
  
  changeField(event) {
  const name = event.target.name;
  const value = event.target.value;
  this.setState({[name]: value})
  }
  
  render() {
    const { email, password } = this.state;
    
    return (
        <div className="login-page-wrapper">
          <div className="container center-content flex-column">
            <div className="ml-auto mr-auto col-12 col-md-8 col-lg-5 form-wrapper">
              <img src={images.login.logoWhite} className="logo-img" alt="logo"/>

              <input
                type="text"
                placeholder="Email"
                autoFocus={true}
                value={email}
                className="form-input"
                name="email"
                onChange={this.changeField}
              />
              <input
                type="password"
                className="form-input"
                placeholder="Password"
                value={password}
                name="password"
                onChange={this.changeField}
              />
              <button className="login-button" onClick={this.submitForm}>Login</button>
            </div>
          </div>
        </div>
    );
  }
}


function mapStateToProps(state, props) {
  return {
  };
}

function mapDispatchToProps(dispatch, props) {
  return bindActionCreators(
    {
      login: AuthState.actions.signin,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
