'use strict';

process.env.NODE_ENV = 'test';

const {
    describe,
    it
} = require('mocha');
const assert = require('chai').assert;
const request = require('supertest');
const knex = require('../../../knex');
const app = require('../../../app');

describe('routines route', () => {

    before((done) => {
        knex.migrate.latest()
            .then(() => {
                done();
            })
            .catch((err) => {
                done(err);
            });
    });

    // `beforeEach` is run before each test in a describe
    beforeEach((done) => {
        knex.seed.run()
            .then(() => {
                done();
            })
            .catch((err) => {
                done(err);
            });
    });

    describe('GET /routines?muscleGroup=triceps', () => {
        it('should respond with a status code of 200', (done) => {
            request(app)
                .get('/routines?muscleGroup=triceps')
                .expect(200, done);
        });

        it('should respond with a Content-Type of application/json', (done) => {
            request(app)
                .get('/routines?muscleGroup=triceps')
                .set('Accept', 'application/json')
                .expect('Content-Type', /application\/json/, done);
        });



    });
});
