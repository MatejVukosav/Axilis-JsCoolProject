const HttpStatus = require('http-status-codes');
const config = require('./config');
const jwt = require('jsonwebtoken');
const Q = require('q');

function decrypt(password) {
    var decipher = crypto.createDecipher(config.algorithm, config.algorithmPrivateKey);
    var dec = decipher.update(password, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
}

// method to encrypt data(password)
function encrypt(password) {
    var cipher = crypto.createCipher(config.algorithm, config.algorithmPrivateKey);
    var crypted = cipher.update(password, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

function sign(username) {
    const token = jwt.sign({
        username: username
    }, config.data.jwtSecret)

    return token;
}

function verify(token) {
    let deferred = Q.defer();

    jwt.verify(token, config.data.jwtSecret, (_err) => {
        if (_err) {
            console.log(_err);
            return deferred.reject(HttpStatus.UNAUTHORIZED);
        }
        return deferred.resolve(HttpStatus.Ok);
    });

    return deferred.promise
}

module.exports = {
    decrypt,
    encrypt,
    sign,
    verify
}