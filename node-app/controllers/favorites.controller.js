'use strict';

const HttpStatus = require('http-status-codes');
const FavoriteService = require('../services/favorite.service');
const UserViewModel = require('../viewModels/user.viewModel');

function addFavorite(req, res) {
    const userId = req.params.userId;
    const movieId = req.params.movieId;

    if (!userId || !movieId) {
        return res.sendStatus(HttpStatus.BAD_REQUEST);
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
    const movieId = req.params.movieId;
    if (!userId || !movieId) {
        return res.sendStatus(HttpStatus.BAD_REQUEST);
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
        return res.sendStatus(HttpStatus.BAD_REQUEST);
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