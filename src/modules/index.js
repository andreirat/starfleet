import React, { Component } from 'react';
/* ROUTER */
import { Route, Router, Switch } from 'react-router-dom';
/* REDUX */
import history from '../history';

/* STYLES */
import '../assets/scss/index.scss';
import '@elastic/eui/dist/eui_theme_light.css';


/* MODULES */
import AppContainer from './App/containers/AppContainer';
import Login from './Login';
import NotFound from './404';


export default class App extends Component {
  render() {
    return(
     <Router history={history}>
      <main className="app-container">
        <Switch>
          <Route exact path="/" component={AppContainer} />
          <Route path="/login" component={Login}/>
          <Route component={NotFound}/>
        </Switch>
      </main>
    </Router>
    );
  }
}
