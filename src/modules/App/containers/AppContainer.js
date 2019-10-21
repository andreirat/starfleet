import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {history} from "../../../redux/configureStore";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SideBar from "../../../components/SideBar";
import NotFound from "../../404";
import Dashboard from "../../Dashboard";
import ShipDetails from "../../Ship/Details";

class AppContainer extends React.Component {
  
  componentDidMount() {
    if (this.props.user === null) {
      history.push('/login');
    }
  }
  
  render() {
    const {user} = this.props;
    return (
      <Router>
          {/*<TopBar/>*/}
          <SideBar user={user}/>
          <div className="main">
            <Switch>
              <Route path="/" exact={true} component={Dashboard} />
              <Route path="/ship" component={ShipDetails} />
              <Route component={NotFound}/>
            </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state, props) {
  console.log(state);
  return {
    user: state.Auth.user.data
  };
}

function mapDispatchToProps(dispatch, props) {
  return bindActionCreators(
    {},
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);