import React from 'react';
import { browserHistory } from 'react-router'

class ErrorMessage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="alert alert-danger fade in">
        <a href="#" className="close" data-dismiss="alert">&times;</a>
        <strong>Error!</strong> {this.props.message}
      </div>
    )
  }
}

class SignIn extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isError: false,
      output: '....'
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  };

  updateState(isError, message) {
    this.setState({
      isError: isError,
      output: message,
    });
  }

  test123(){
    return console.log('hei there')
  }

  componentWillMount(nextProps, nextState){
    console.log(this.state);
    // if (nextState.isError === false) {
    //   localStorage.setItem('userid', nextState.output.userId);
    //   browserHistory.push(`/`)
    // }

  }

  handleSubmit(e) {
    e.preventDefault();
    let form = e.target;
    let inputUsername = form.querySelector('[name="inputUsername"]').value;
    let inputPassword = form.querySelector('[name="inputPassword"]').value;

    var formPayload = new FormData();
    formPayload.append('username', inputUsername);
    formPayload.append('password', inputPassword);

    let payload = {
      username: inputUsername
      ,password: inputPassword
    }

    const signInParams = Object.keys(payload).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(payload[key]);
    }).join('&');
    var myHeaders = new Headers();

    myHeaders.append('Accept', 'application/json, application/xml, text/plain, text/html, *.*');
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
    var req = new Request('http://localhost:1212/sign-in', {
      method: 'POST',
      body: signInParams,
      headers: myHeaders
    });
    var _this = this;
    fetch(req).then(function (response) {

      response.json().then(function (data) {

        if (response.status !== 401) {
          return browserHistory.push('/')
        }
        var isLoginError = (response.status === 401) ? true : false;
        return _this.updateState(isLoginError, data.output)

      });

    });

  }

  render() {
    return (
      <div className="form-signin">
        { this.state.isError ? <ErrorMessage message={this.state.output} /> : null }
        <form onSubmit={this.handleSubmit}>
          <h2 className="form-signin-heading">Please sign in</h2>
          <label className="sr-only">Email address</label>
          <input type="text" id="inputUsername" name="inputUsername" className="form-control" placeholder="UserName" required  />
          <label className="sr-only">Password</label>
          <input type="password" id="inputPassword" name="inputPassword" className="form-control" placeholder="Password" required />

          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
