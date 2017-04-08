import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class LoginComponent extends Component {

  state = {
    loggedIn: false,
  };

  logIn = (password) => {
    fetch('/login', { 
      method: 'POST',
      body: `password=${password}`,
      credentials: 'include',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then((response) => {
      if (response.status === 200) {
        console.log("Login was successful!");

        // This will add state to nagivation, Redirect won't
        // this.props.history.push('/');
        this.setState({
          loggedIn: true
        })

      } else {
        console.error("Invalid credentials!");
      }
    });
  }

  render = () => {

    if (this.state.loggedIn) {
      return (
        <Redirect to="/" />
      );
    }

    return (
            <div>
              <input onChange={this.props.inputChangedEvent} label='Username' value={this.props.value} type="text"/><br/>
              <button onClick={this.props.login} className="btn btn-primary">Login</button>
            </div>
            );
  }
}
export default LoginComponent;
