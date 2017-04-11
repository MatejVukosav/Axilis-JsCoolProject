const validation = require('../validation');
const jwt = require('jsonwebtoken');
const config = require('../config');

function authenticationMiddleware(req, res, next) {
    const token = req.headers['authorization']
/*    jwt.verify(token, config.data.jwtSecret, (_err) => {
        if (_err) {
            return res
                .status(401)
                .end();
        }
        next();
    });*/

    validation.verify(token)
    .then(() => {
            console.log("Token verified")
            next();
        })
        .catch((_err) => {
            console.log(_err)
            return res
                .status(401)
                .end();
        });

}

module.exports = {
    authenticationMiddleware
};
