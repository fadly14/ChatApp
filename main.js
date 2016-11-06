import React from 'react';
import ReactDom from 'react-dom';
import styles from './app.css';

import App from './App.jsx';
import SignIn from './SignIn.jsx';


import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router'

ReactDom.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/sign-in" component={SignIn}/>
  </Router>
  , document.getElementById('app'));
