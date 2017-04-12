'use strict'

const HttpStatus = require('http-status-codes');
const validation = require('../validation');
const jwt = require('jsonwebtoken');
const config = require('../config');

function authenticationMiddleware(req, res, next) {
    const token = req.headers['authorization']

    validation
        .verify(token)
        .then(() => {
            //console.log("Token verified")
            next();
        })
        .catch((_err) => {
            console.log(_err)
            return res
                .status(HttpStatus.UNAUTHORIZED)
                .end();
        });

}

module.exports = {
    authenticationMiddleware
};
