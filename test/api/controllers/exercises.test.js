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

describe('exercises route', () => {

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

    describe('GET /excercises', () => {
        it('should respond with a status code of 200', (done) => {
            request(app)
                .get('/exercises')
                .expect(200, done);
        });

        it('should respond with a Content-Type of application/json', (done) => {
            request(app)
                .get('/exercises')
                .set('Accept', 'application/json')
                .expect('Content-Type', /application\/json/, done);
        });
    });

    describe('GET /exercises/{id}', () => {
        it('should respond with a status code of 200', (done) => {
            request(app)
                .get('/exercises/1')
                .expect(200, done);
        });

        it('should respond with a Content-Type of application/json', (done) => {
            request(app)
                .get('/exercises/1')
                .set('Accept', 'application/json')
                .expect('Content-Type', /application\/json/, done);
        });

        it('should respond with the specific exercise at position one', (done) => {
            request(app)
                .get('/exercises/1')
                .set('Accept', 'application/json')
                .expect({
                    id: 1,
                    name: 'Bear Crawl Fire Feet',
                    muscle: {
                        id: 12,
                        name: 'Shoulders',
                        size: 'small'
                    },
                    equipment: {
                        id: 5,
                        name: 'Body Only'
                    },
                    type: {
                        id: 1,
                        name: 'Cardio'
                    }
                }, done);
        });
    });
    describe('GET /exercises/types', () => {
        it('should respond with a status code of 200', (done) => {
            request(app)
                .get('/exercises/types')
                .expect(200, done);
        });

        it("should respond with content-type of application/json", (done) => {
            request(app)
                .get('/exercises/types')
                .set('Accept', 'application/json')
                .expect('Content-Type', /application\/json/, done);
        });

        it('should respond with an array of all exercise types', (done) => {
            request(app)
                .get('/exercises/types')
                .set('Accept', 'application/json')
                .expect([{
                        id: 1,
                        name: 'Cardio'
                    },
                    {
                        id: 2,
                        name: 'Olympic Weightlifting'
                    },
                    {
                        id: 3,
                        name: 'Plyometrics'
                    },
                    {
                        id: 4,
                        name: 'Powerlifting'
                    },
                    {
                        id: 5,
                        name: 'Strength'
                    },
                    {
                        id: 6,
                        name: 'Stretching'
                    },
                    {
                        id: 7,
                        name: 'Strongman'
                    }
                ], done)
        })
    });

    describe('GET /exercises/types/:id', () => {
        it('should respond with a status code of 200', (done) => {
            request(app)
                .get('/exercises/types/7')
                .expect(200, done);
        });

        it("should respond with content-type of application/json", (done) => {
            request(app)
                .get('/exercises/types/7')
                .set('Accept', 'application/json')
                .expect('Content-Type', /application\/json/, done);
        });

        it('should respond with exercise type object with an id of 7', (done) => {
            request(app)
                .get('/exercises/types/7')
                .set('Accept', 'application/json')
                .expect({
                    "id": 7,
                    "name": 'Strongman'
                }, done)
        });
    });
});
