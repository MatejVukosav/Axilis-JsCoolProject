const config = require('./config');
const jwt = require('jsonwebtoken');
const Q = require('q');

var algorithm = 'aes-256-ctr';
var privateKey = '37LvDSm4XvjYOh9r';

function decrypt(password) {
    var decipher = crypto.createDecipher(algorithm, privateKey);
    var dec = decipher.update(password, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
}

// method to encrypt data(password)
function encrypt(password) {
    var cipher = crypto.createCipher(algorithm, privateKey);
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

//how to??
function verify(token) {
    let deferred = Q.defer();

    jwt.verify(token, config.data.jwtSecret, (_err) => {
        if (_err) {
            console.log(_err);
            return deferred.reject(401);
        }
        return deferred.resolve(200);
    });
}

module.exports = {
    decrypt,
    encrypt,
    sign,
    verify
}