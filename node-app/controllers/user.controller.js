'use strict';

const validation = require('../validation');

const User = require('../models/user.model');

const UserService = require('../services/user.service');
const UserViewModel = require('../viewModels/user.viewModel');

function login(req, res) {
    const username = req.body.username;

    if (!username) {
        return res.json('Username is mandatory');
    }

    UserService
        .getUser(username)
        .then((user) => {
            const token = validation.sign(username);

            if (!token) {
                return res.sendStatus(500);
            }

            return res.json({token, user: new UserViewModel(user)});
        })
        .catch((_err) => {
            //ako ga rejecta
            return res.sendStatus(_err);
        });
}

function logout(req, res) {
    const username = req.body.username;
    return res.json('User ' + username + ' logout');
}

function register(req, res) {
    const user = new User(req.body);

    UserService
        .createUser(user)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((_err) => {
            res.sendStatus(_err);
        });
}

module.exports = {
    login,
    logout,
    register
}