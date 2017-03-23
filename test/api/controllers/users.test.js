'use strict';

process.env.NODE_ENV = 'test';

const { describe, it } = require('mocha');
const assert = require('chai').assert;
const request = require('supertest');
const knex = require('../../../knex');
const app = require('../../../app');
const bcrypt = require('bcrypt')

describe('TESTS FOR USERS ROUTE', () => {

  // `before` runs once before all tests in a describe
  before((done) => {
    knex.migrate.rollback()
    .then(function(){
      return knex.migrate.latest()
    })
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

  // test the POST method on users with no email
  it('should POST /user with no email', (done) => {
    request(app)
      .post('/users')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        first_name: 'Paola',
        last_name: 'Carlos',
        password: 'iloveservers',
        weight: 123,
        user_intentions: 'lose weight'
      })
      .expect('Content-Type', 'application/json')
      .expect(400, JSON.stringify({code: 400, message: "foo"}), done);
  });

  // test the Post method on users with no password
  it('should POST /users with no password', (done) => {
    request(app)
      .post('/users')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        first_name: 'Paola',
        last_name: 'Carlos',
        email: 'paoladatabasequeen@boss.com',
        weight: 123,
        user_intentions: 'lose weight'
      })
      .expect('Content-Type', 'application/json')
      .expect(400, 'Password must be at least 8 characters long', done);
  });


  it('should response to POST /users', (done) => {
    const password = 'ilovebackend';

    request(app)
      .post('/users')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        first_name: 'Paola',
        last_name: 'Carlos',
        email: 'paoladatabasequeen@boss.com',
        password,
        weight: 123,
        user_intentions: 'lose weight'
      })
      .expect( (user) => {
        delete user.body.created_at;
        delete user.body.updated_at;
      })
      .expect(200, {
        id: 2,
        first_name: 'Paola',
        last_name: 'Carlos',
        email: 'paoladatabasequeen@boss.com',
        weight: 123,
        user_intentions: 'lose weight'
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

            const hashed_password = user.hashed_password;

            delete user.hashed_password;
            delete user.created_at;
            delete user.updated_at;

            assert.deepEqual(user,
              {
                id: 2,
                first_name: 'Paola',
                last_name: 'Carlos',
                email: 'paoladatabasequeen@boss.com',
                weight: 123,
                user_intentions: 'lose weight'
              });

            // Synchronous password comparison
            const isMatch = bcrypt.compareSync(password, hashed_password);

            assert.isTrue(isMatch, "passwords don't match");
            done();
          })
          .catch((dbErr) => {
            done(dbErr);
          });
    });
  }); // end of test for create user /POST

  describe('with token', () => {
    const agent = request.agent(app);

    // beforeEach((done) => {
    //   knex.seed.run()
    //     .then(() => {
    //       request(app)
    //         .post('/token')
    //         .set('Accept', 'application/json')
    //         .set('Content-Type', 'application/json')
    //         .send({
    //           email: 'marylovesserverside@yeehaw.com',
    //           password: 'followthewhiterabbit'
    //         })
    //     })
    //     .end((err, res) => {
    //       if (err) {
    //         return done(err);
    //       }
    //       agent.saveCookies(res);
    //       done();
    //     })
    //     .catch((err) => {
    //       done(err);
    //     });
    // });

    it('should PATCH /users/:id', (done) => {
      agent
        .patch('/users/1')
        .set('Accept', 'application/json')
        .send({
          first_name: 'Mary',
          last_name: 'Lai',
          email: 'marylovesserverside@yeehaw.com',
          password: 'followthewhiterabbit',
          weight: 22,
          user_intentions: 'I want to gain muscle'
        })
        .expect('Content-Type', /json/)
        .expect((res) => {
          delete res.body.created_at;
          delete res.body.updated_at;
        })
        .expect(200, {
          id: 1,
          first_name: 'Mary',
          last_name: 'Lai',
          email: 'marylovesserverside@yeehaw.com',
          hashed_password: '$2a$12$81WmMv01NoUDmXsqmxck8epmWYDAD4ZNhjz6l98g9N9jxBRHTUmpq', // followthewhiterabbit
          weight: 22,
          user_intentions: 'I want to gain muscle',
        }, done);
    });
  });






});
