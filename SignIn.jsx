import React from 'react';

class SignIn extends React.Component {

  constructor(props) {
     super(props);

     this.state = {
        email: 'Initial data...',
        password: '....'
     }

     this.updateState = this.updateState.bind(this);

  };

  updateState(e) {

    let form = e.target;
    let inputUsername = form.querySelector('[name="inputUsername"]').value;
    let inputPassword = form.querySelector('[name="inputPassword"]').value;

    this.setState({
      email: inputUsername,
      password: inputPassword,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let form = e.target;
    let inputUsername = form.querySelector('[name="inputUsername"]').value;
    let inputPassword = form.querySelector('[name="inputPassword"]').value;

    let payload = {
      username: inputUsername
      ,password: inputPassword
    }

    var formData = new FormData();

    for (var k in payload) {
      formData.append(k, payload[k]);
    }

    console.log('gg',new FormData(inputUsername));
    // let data = JSON.stringify( payload );
    // console.log(JSON.stringify( payload ));
    // let data = new FormData();
    // data.append( "json", JSON.stringify( payload ) );

    fetch("http://localhost:1212/sign-in", {
      method: "POST",
      mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: payload
    }).then(function(res) {
      console.log(res);
    }, function(e) {
      console.log(e);
    });


  }

  render() {
    return (
      <div className="form-signin">
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
