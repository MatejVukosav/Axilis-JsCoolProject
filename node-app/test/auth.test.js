'use strict';

const jwt = require('jsonwebtoken');
let mongoose = require("mongoose");
let User = require('../models/user.model');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();
let expect = chai.expect;
let request = require('supertest')
let httpStatus = require('http-status');

chai.use(chaiHttp);

describe('## Auth APIs', () => {
    const validUserCredentials = {
        username: 'matej'
    };

    const invalidUserCredentials = {
        username: 'wrong credentials'
    };

    it('login successfully', (done) => {
        request(app.app)
            .post('/api/v1/auth/login')
            .send(validUserCredentials)
            .expect(httpStatus.OK)
            .then((err, res) => {
                done();
            })   .catch(done);
    });

/*   it('login failed', (done) => {
        request(app.app)
            .post('/api/v1/auth/login')
            .send(invalidUserCredentials)
            .expect(httpStatus.NOT_FOUND)
            .then((err, res) => {
                done();
            })   .catch(done);
    });*/

});