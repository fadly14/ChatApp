import React from 'react';
import SignIn from './SignIn.jsx';

import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router'

class App extends  React.Component {
  constructor(props) {
    super(props)
    const username = localStorage.getItem('username');

    if (!username) {
      browserHistory.push(`/sign-in`)
    }

  }

  render() {
    return (
      <div>
        <div className="container">
          Home
        </div>
      </div>

    );
  }
}

export default App;
