'use strict'

const HttpStatus = require('http-status-codes');
const Q = require('q');
const User = require('../models/user.model');

function addFavorite(userId, movieId) {
    //console.log('addFavorite');
    let deferred = Q.defer();

    User
        .findOne({username: userId})
        .exec((_err, _user) => {
            if (_err) {
                return deferred.reject(HttpStatus.INTERNAL_SERVER_ERROR);
            }

            if (!_user) {
                return deferred.reject(HttpStatus.NOT_FOUND);
            }
            //find user, update favorites
            if (!_user.favorites) {
                _user.favorites = [];
            }

            const ifMovieIsFavorite = _user
                .favorites
                .indexOf(movieId) == -1
                ? false
                : true;

            if (!ifMovieIsFavorite) {
                _user
                    .favorites
                    .push(movieId);

                _user.save((_err, user) => {
                    if (_err) {
                        return deferred.reject(HttpStatus.INTERNAL_SERVER_ERROR);
                    }

                    return deferred.resolve(HttpStatus.OK);
                })
            } else {
                //already in favorites
                return deferred.reject(HttpStatus.CONFLICT);
            }
        });

    return deferred.promise;
}

function deleteFavorite(userId, movieId) {
    // console.log('deleteFavorite');
    let deferred = Q.defer();

    User
        .findOne({username: userId})
        .exec((_err, _user) => {
            if (_err) {
                return deferred.reject(HttpStatus.INTERNAL_SERVER_ERROR);
            }

            if (!_user) {
                return deferred.reject(HttpStatus.NOT_FOUND);
            }
            //find user, update favorites

            if (!_user.favorites) {
                return deferred.resolve(HttpStatus.NOT_MODIFIED);
            }

            // is it valid?
            const ifMovieIsFavorite = _user
                .favorites
                .indexOf(movieId) == -1
                ? false
                : true;

            if (ifMovieIsFavorite) {

                //if is favorite,remove it
                _user
                    .favorites
                    .pull(movieId);

                _user.save((_err) => {
                    if (_err) {
                        return deferred.reject(HttpStatus.INTERNAL_SERVER_ERROR);
                    }

                    return deferred.resolve(HttpStatus.OK);
                })
            }
            //it wasn't in favorites,so nothing changed
            return deferred.resolve(HttpStatus.NOT_MODIFIED);
        });

    return deferred.promise;
}

function getFavorite(userId) {
    //console.log('getFavorite');

    let deferred = Q.defer();

    User
        .findOne({username: userId})
        .exec((_err, _user) => {
            if (_err) {
                return deferred.reject(HttpStatus.INTERNAL_SERVER_ERROR);
            }

            if (!_user) {
                return deferred.reject(HttpStatus.NOT_FOUND);
            }

            return deferred.resolve(_user.favorites);
        });

    return deferred.promise;
}

module.exports = {
    addFavorite,
    deleteFavorite,
    getFavorite
}