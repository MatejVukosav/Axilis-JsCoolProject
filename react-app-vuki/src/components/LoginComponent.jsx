import React, {Component} from 'react';
import ApiUtils from '../ApiUtils'
import {Redirect} from 'react-router';
import Button from './Button';
import EditText from './EditText';
import './LoginComponent.css';
const apiUrl = 'http://localhost:3000/api/v1';
const loginPath = '/auth/login'

class LoginComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            username: '',
            isError: false,
            isLoading: false,
            errorMsg: ""
        };

        this.handleUsernameInputChange = this
            .handleUsernameInputChange
            .bind(this);
        this.login = this
            .login
            .bind(this);

    }

    componentDidMount() {
        //  this.props.route.callbackFromParent = this.state.loggedIn;
    }

    login(username) {
        console.log('login');
        fetch(apiUrl + loginPath, {
            method: 'POST',
            body: JSON.stringify({"username": this.state.username}),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }

            })
            .then(ApiUtils.checkStatus)
            .then(res => {
                this.setState({isError: false, isLoading: false, loggedIn: true, errorMsg: ""});
                return res.json();
            })
            .catch(_err => {
                console.log({_err});
                this.setState({isError: true, isLoading: true, errorMsg: "Credentials invalid"});
            })
    }

    handleUsernameInputChange(event) {
        this.setState({username: event.target.value, errorMsg: ""});
    }

    render() {

        if (this.state.loggedIn) {
            return (<Redirect to='/'/>);
        }

        return (
            <div className="LoginComponent">
                <EditText
                    text="Please enter your username"
                    labelText="Username"
                    inputChangedEvent={this.handleUsernameInputChange}/>

                <div>
                    <label >{this.state.errorMsg}</label>
                </div>

                <Button text='Login' clickEventMethod={this.login}/>
            </div>
        )
    }
}

export default LoginComponent;