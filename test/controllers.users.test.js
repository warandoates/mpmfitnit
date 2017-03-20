'use strict';

process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const { describe, it } = require('mocha');
const bcrypt = require('bcrypt')
const supertest = require('supertest');
const knex = require('../knex');
const index = require('../index');

describe('users routes', () => {

  // `before` runs once before all tests in a describe
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

  // test the POST method on users
  it('should response to POST /users'), (done) => {
    const password = 'ilovebackend';

    supertest(index)
      .post('/users')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        firstName: 'Paola',
        lastName: 'Carlos',
        email: 'paoladatabasequeen@boss.com',
        password
      })
      .expect((res) => {
        delete res.body.createdAt;
        delete res.body.updatedAt;
      })
      .expect(200, {
        id: 2,
        firstName: 'Paola',
        lastName: 'Carlos',
        email: 'paoladatabasequeen@boss.com'
      })
      .expect('Content-Type', /json/)
      .end((httpErr, _res) => {
        if (httpErr) {
          return done(httpErr);
        }

        knex('users')
          .where('id', 2)
          .first()
          .then((user) => {
            const hashedPassword = user.hashed_password;

            delete user.hashed_password;
            delete user.created_at;
            delete user.updated_at;

            assert.deepEqual(user,
              {
                id: 2,
                firstName: 'Paola',
                lastName: 'Carlos',
                email: 'paoladatabasequeen@boss.com'
              });

            // Synchronous password comparison
            const isMatch = bcrypt.compareSync(password, hashed_password);

            assert.isTrue(isMatch, "passwords don't match");
            done();
          });
          .catch((dbErr) => {
            done(dbErr);
          });
      });
  });
});
