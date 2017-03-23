process.env.NODE_ENV = 'test';

const {
    describe,
    it
} = require('mocha');
const assert = require('chai').assert;
const request = require('supertest');
const knex = require('../../../knex');
const index = require('../../../app');

describe('equipment route', () => {

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

    describe('GET /equipment', () => {
        it('should respond with a status code of 200', (done) => {
            request(index)
                .get('/equipment')
                .expect(200, done);
        });

        it('should respond with a Content-Type of application/json', (done) => {
            request(index)
                .get('/equipment')
                .set('Accept', 'application/json')
                .expect('Content-Type', /application\/json/, done);
        });

        it('should respond with array of all equipment type objects', (done) => {
            request(index)
                .get('/equipment')
                .set('Accept', 'application/json')
                .expect([
                  {
                    id: 1,
                    name: 'Bands'
                  },
                  {
                    id: 2,
                    name: 'Foam Roll'
                  },
                  {
                    id: 3,
                    name: 'Barbell'
                  },
                  {
                    id: 4,
                    name: 'Kettlebells'
                  },
                  {
                    id: 5,
                    name: 'Body Only'
                  },
                  {
                    id: 6,
                    name: 'Machine'
                  },
                  {
                    id: 7,
                    name: 'Cable'
                  },
                  {
                    id: 8,
                    name: 'Medicine Ball'
                  },
                  {
                    id: 9,
                    name: 'Dumbbell'
                  },
                  {
                    id: 10,
                    name: 'None'
                  },
                  {
                    id: 11,
                    name: 'E-Z Curl Bar'
                  },
                  {
                    id: 12,
                    name: 'Other'
                  },
                  {
                    id: 13,
                    name: 'Exercise Ball'
                  }
                ], done);
        });
    });

    describe('GET /equipment/{id}', () => {
        it('should respond with a status code of 200', (done) => {
            request(index)
                .get('/equipment/1')
                .expect(200, done);
        });
    //
        it('should respond with a Content-Type of application/json', (done) => {
            request(index)
                .get('/equipment/1')
                .set('Accept', 'application/json')
                .expect('Content-Type', /application\/json/, done);
        });
    //
        it('should respond with the specific muscle at position one', (done) => {
            request(index)
                .get('/equipment/11')
                .set('Accept', 'application/json')
                .expect({
                    id: 11,
                    name: 'E-Z Curl Bar'
                }, done);
        });
    });
});
