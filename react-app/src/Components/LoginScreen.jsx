import React, { Component } from 'react';

class LoginScreen extends Component {
    render() {
        return (
            <div>
              <input onChange={this.props.inputChangedEvent} label='Username' value={this.props.value} type="text"/><br/>
              <button onClick={this.props.login} className="btn btn-primary">Login</button>
            </div>
            );
    }
}

export default LoginScreen;