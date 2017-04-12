'use strict';

const HttpStatus = require('http-status-codes');
const FavoriteService = require('../services/favorite.service');
const UserViewModel = require('../viewModels/user.viewModel');

function addFavorite(req, res) {
    const userId = req.params.userId;
    if (!userId) {
        return deferred.reject("User id is missing");
    }

    const movieId = req.params.movieId;
    if (!movieId) {
        return deferred.reject("MovieS id is missing");
    }

    FavoriteService
        .addFavorite(userId, movieId)
        .then(() => {
            return res.sendStatus(HttpStatus.OK);
        })
        .catch((_err) => {
            return res.sendStatus(_err);
        });
}

function deleteFavorite(req, res) {
    const userId = req.params.userId;
    if (!userId) {
        return deferred.reject("User id is missing");
    }

    const movieId = req.params.movieId;
    if (!movieId) {
        return deferred.reject("MovieS id is missing");
    }

    FavoriteService
        .deleteFavorite(userId, movieId)
        .then(() => {
            return res.sendStatus(HttpStatus.OK);
        })
        .catch((_err) => {
            return res.sendStatus(_err);
        });
}

function getUserFavoritesFavorite(req, res) {
    const userId = req.params.userId;
    if (!userId) {
        return deferred.reject("User id is missing");
    }

    FavoriteService
        .getFavorite(userId)
        .then((favorites) => {
            return res
                .status(HttpStatus.OK)
                .json(favorites);
        })
        .catch((_err) => {
            return res.sendStatus(_err);
        });
}

module.exports = {
    addFavorite,
    deleteFavorite,
    getUserFavoritesFavorite
}