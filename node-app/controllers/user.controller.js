'use strict';

const mongoose = require('mongoose');
const User = require('../models/user.model');

const UserService = require('../services/user.service');
const UserViewModel = require('../viewModels/user.viewModel');

function login(req, res) {
    const username = req.body.username;
    UserService
        .getUser(username)
        .then((user) => {
            res.json(new UserViewModel(user));
        })
        .catch((_err) => {
            //ako ga rejecta
            res.sendStatus(_err);
        });
}

function createUser(req, res) {
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
    createUser
}