'use strict'

const express = require('express');
const router = express.Router();

const FavoritesController = require('../controllers/favorites.controller')

router.post('/:userId/favorites/:movieId', FavoritesController.addFavorite);
router.delete('/:userId/favorites/:movieId', FavoritesController.deleteFavorite);

module.exports = router;
