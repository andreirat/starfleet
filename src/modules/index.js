import React, { Component } from 'react';
/* ROUTER */
import { Route, Router, Switch } from 'react-router-dom';
/* REDUX */
import {history} from '../redux/configureStore';

/* STYLES */
import '../assets/scss/index.scss';
import '@elastic/eui/dist/eui_theme_light.css';

/* MODULES */
import AppContainer from './App/containers/AppContainer';
import Login from './Login';
import NotFound from './404';
import {ConnectedRouter} from "connected-react-router";

export default class App extends Component {
  render() {
    return(
     <Router history={history}>
      <main className="grid-container">
        <ConnectedRouter history={history}>
        <Switch>
          <Route path="/"  component={AppContainer} />
          <Route path="/login"  component={Login}/>
          <Route component={NotFound} exact={true}/>
        </Switch>
        </ConnectedRouter>
      </main>
    </Router>
    );
  }
}
