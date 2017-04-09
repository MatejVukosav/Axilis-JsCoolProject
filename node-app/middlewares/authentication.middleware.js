

function authenticationMiddleware(req, res, next) {

    if (req.headers['authorization']) {
        return next();
    }
    res
        .status(401)
        .end();
}

module.exports = {
    authenticationMiddleware
};
