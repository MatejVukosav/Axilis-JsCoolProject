'use strict'

module.exports = function (user) {
  return {username: user.username, favorites: user.favorites};
};