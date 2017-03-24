'use strict';

/**
 * Creates a new user in the database
 **/
const bcrypt = require('bcrypt-as-promised');
const Users = require('../../models/users');
// const ev = require('express-validation');

function addNewUser(req, res) {
    let email = req.body.email;
    let password = req.body.password;

    bcrypt.hash(password, 12)
        .then((hashed_password) => {
            return Users.forge({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: email,
                    hashed_password: hashed_password,
                    weight: req.body.weight,
                    user_intentions: req.body.user_intentions
                })
                .save()
                .then((user) => {
                    let u = JSON.parse(JSON.stringify(user));
                    delete u.hashed_password;
                    res.setHeader('Content-Type', 'application/json');
                    res.send(u);
                })
                .catch(function(err) {
                    res.setHeader("Content-Type", "application/json")
                    res.status(400).json({
                        code: 400,
                        message: "foo"
                    });
                });
        });
}

function updateUser(req, res) {
  console.log('hi im here');

  const id = req.swagger.params.id.value;
  console.log(id);

  if (id < 0 || Number.isNaN(id)) {
    return res.status(400).json({
        code: 400,
        message: "foo"
    })
  }

  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let email = req.body.email;
  let weight = req.body.weight;
  let user_intentions = req.body.user_intentions;

  let hash;

  if (req.body.password) {
        bcrypt.hash(req.body.password, 12)
          .then((hashed_password) => {
            hash = hashed_password;
          })
  }

  if (!first_name && !last_name && !email && !weight && !user_intentions && !password) {
      return res.sendStatus(400);
  }

  let updatedUser = {};
  if (first_name) {
    updatedUser.first_name = first_name;
  }
  if (last_name) {
    updatedUser.last_name = last_name;
  }
  if (email) {
    updatedUser.email = email;
  }
  if (weight) {
    updatedUser.weight = weight;
  }
  if (req.body.password) {
    updatedUser.hashed_password = hash;
  }
  if (user_intentions) {
    updatedUser.user_intentions = user_intentions;
  }

  return Users.where({id: id})
      .save(updatedUser, {patch: true})
      .then((user) => {
        console.log(user);
        let u = JSON.parse(JSON.stringify(user));
        console.log(u);
        delete u.hashed_password;
        res.setHeader('Content-Type', 'application/json');
        res.send(u);
      })
      .catch(function(err) {
              res.setHeader("Content-Type", "application/json")
              res.status(400).json({
                  code: 400,
                  message: "foo"
              });
      });
};

function deleteUser(req, res) {
  Users.where({id: req.swagger.params.id.value})
        .fetch({require: true})
        .then((user) => {
          console.log('hey');
            user.destroy()
            return user;
        })
        .then((user) => {
          let u = JSON.parse(JSON.stringify(user));
          delete u.hashed_password;
          res.setHeader('Content-Type', 'application/json');
          res.send(u);
        })
        .catch(function(err) {
            res.setHeader("Content-Type", "application/json")
            res.status(400).json({
                code: 400,
                message: "foo"
            });
        });
};

module.exports = {
    addNewUser: addNewUser,
    deleteUser: deleteUser,
    updateUser: updateUser
};
