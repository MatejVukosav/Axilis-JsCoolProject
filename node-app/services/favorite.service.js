'use strict'

const Q = require('q');
const User = require('../models/user.model');

function addFavorite(userId, movieId) {
    console.log('addFavorite');

    let deferred = Q.defer();

    if (!userId) {
        return deferred.reject("User id is missing");
    }

    if (!movieId) {
        return deferred.reject("MovieS id is missing");
    }

    User
        .findOne({username: userId})
        .exec((_err, _user) => {
            if (_err) {
                return deferred.reject(500);
            }

            if (!_user) {
                return deferred.reject(404);
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
                        return deferred.reject(500);
                    }

                    return deferred.resolve(200);
                })
            } else {
                //already in favorites
                return deferred.reject(409);
            }
        });

    return deferred.promise;
}

function deleteFavorite(userId, movieId) {
    console.log('deleteFavorite');

    let deferred = Q.defer();

    if (!userId) {
        return deferred.reject('User id is mandatory');
    }
    if (!movieId) {
        return deferred.reject('Movie id is mandatory');
    }

    User
        .findOne({username: userId})
        .exec((_err, _user) => {
            if (_err) {
                return deferred.reject(500);
            }

            if (!_user) {
                return deferred.reject(404);
            }
            //find user, update favorites

            if (!_user.favorites) {
                return deferred.resolve(200);
            }

            // is it valid?
            const ifMovieIsFavorite = _user
                .favorites
                .indexOf(movieId) == -1
                ? false
                : true;

            if (ifMovieIsFavorite) {

                _user
                    .favorites
                    .pull(movieId);

                _user.save((_err) => {
                    if (_err) {
                        return deferred.reject(500);
                    }

                    return deferred.resolve(200);
                })
            }
            return deferred.resolve(200);
        });

    return deferred.promise;
}

module.exports = {
    addFavorite,
    deleteFavorite
}