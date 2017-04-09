'use strict';

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
            return res.sendStatus(200);
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
            return res.sendStatus(200);
        })
        .catch((_err) => {
            return res.sendStatus(_err);
        });
}


module.exports = {
    addFavorite,
    deleteFavorite
}