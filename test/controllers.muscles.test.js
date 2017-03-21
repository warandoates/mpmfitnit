process.env.NODE_ENV = 'test';

const {
    describe,
    it
} = require('mocha');
const assert = require('chai').assert;
const request = require('supertest');
const knex = require('../knex');
const index = require('../index');

describe('muscles route', () => {

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

    describe('GET /muscles', () => {
        it('should respond with a status code of 200', (done) => {
            request(index)
                .get('/muscles')
                .expect(200, done);
        });

        it('should respond with a Content-Type of application/json', (done) => {
            request(index)
                .get('/muscles')
                .set('Accept', 'application/json')
                .expect('Content-Type', /application\/json/, done);
        });
        it('should respond with array of all muscle types', (done) => {
            request(index)
                .get('/muscles')
                .set('Accept', 'application/json')
                .expect([{
                        id: 1,
                        name: 'Abdominals',
                        size: ''
                    },
                    {
                        id: 2,
                        name: 'Lats',
                        size: ''
                    },
                    {
                        id: 3,
                        name: 'Abductors',
                        size: ''

                    },
                    {
                        id: 4,
                        name: 'Lower Back',
                        size: ''
                    },
                    {
                        id: 5,
                        name: 'Adductors',
                        size: ''
                    },
                    {
                        id: 6,
                        name: 'Middle Back',
                        size: ''
                    },
                    {
                        id: 7,
                        name: 'Biceps',
                        size: ''
                    },
                    {
                        id: 8,
                        name: 'Neck',
                        size: ''
                    },
                    {
                        id: 9,
                        name: 'Calves',
                        size: ''
                    },
                    {
                        id: 10,
                        name: 'Quadriceps',
                        size: ''
                    },
                    {
                        id: 11,
                        name: 'Chest',
                        size: 'big'
                    },
                    {
                        id: 12,
                        name: 'Shoulders',
                        size: 'small'
                    },
                    {
                        id: 13,
                        name: 'Forearms',
                        size: ''
                    },
                    {
                        id: 14,
                        name: 'Traps',
                        size: ''
                    },
                    {
                        id: 15,
                        name: 'Glutes',
                        size: ''
                    },
                    {
                        id: 16,
                        name: 'Triceps',
                        size: ''
                    },
                    {
                        id: 17,
                        name: 'Hamstrings',
                        size: ''
                    }
                ], done)
        });
    });

    describe('GET /muscles/{id}', () => {
        it('should respond with a status code of 200', (done) => {
            request(index)
                .get('/muscles/1')
                .expect(200, done);
        });

        it('should respond with a Content-Type of application/json', (done) => {
            request(index)
                .get('/muscles/1')
                .set('Accept', 'application/json')
                .expect('Content-Type', /application\/json/, done);
        });

        it('should respond with the specific muscle at position one', (done) => {
            request(index)
                .get('/muscles/1')
                .set('Accept', 'application/json')
                .expect({
                    id: 1,
                    name: 'Abdominals',
                    size: ''
                }, done);
        });
    })
})
