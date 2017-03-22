'use strict';

/**
* Creates a new user in the database
**/
const bcrypt = require('bcrypt-as-promised');
const Users = require('../../models/users');
const {
   camelizeKeys,
   decamelizeKeys
} = require('humps');

function addNewUser(req, res, next) {

  const newUser = req.swagger.newUser;
  console.log(newUser);

  // const firstName = .firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const weight = req.body.weight;
  const intentions = req.body.intentions;

  // bcrypt.hash(password, 12)
  //   .then((hashed_password) => {
  //     return
    Users.forge({
       first_name: firstName,
       last_name: lastName,
       email: email,
       hashed_password: hashed_password,
       weight: weight,
       intentions: intentions
    })
    .save()
    .then((user) => {
      delete user.hashed_password;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(user));
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
      // next(err);
    });
};


function deleteUser (req, res, next) {

  Users.where('id', req.swagger.params.id)
    .fetch({require: true})
    .then((user) => {
      user.destroy()
      return user;
    })
    .then(() => {
      res.json({error: true, data: {message: 'User sucessfully deleted'}});
    })
    .catch((err) => {
      res.status(500).json({error: true, data: {message: err.message}});
    })

};

module.exports = {
  addNewUser: addNewUser,
  deleteUser: deleteUser
};
