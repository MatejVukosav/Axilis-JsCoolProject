'use strict'

const Q = require('q');
const User = require('../models/user.model');

function createUser(username) {
    console.log('create user');

    let deferred = Q.defer();

    const user = new User({username});
    user.save((_err) => {
        if (_err) {
            return deferred.reject(500);
        }

        return deferred.resolve(user);
    })

    return deferred.promise;
}

function getUser(username) {
    console.log('get user');

    let deferred = Q.defer();
    User
        .findOne({username: username})
        .exec((_err, _user) => {
            if (_err) {
                console.log(_err);
                return deferred.reject(500);
            }

            if (_user) {
                return deferred.resolve(_user);
            } else {
                createUser(username).then((user) => {
                    return deferred.resolve(user);
                }).catch(() => {
                    return deferred.reject(500);
                });
            }
        });
    return deferred.promise;

}

module.exports = {
    createUser,
    getUser
}