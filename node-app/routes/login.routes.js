'use strict'

const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user.controller')
/* login */
router.post('/', UserController.login);

module.exports = router;
