'use strict';

/**
* Creates a new user in the database
**/
const bcrypt = require('bcrypt-as-promised');
const Users = require('../../models/users');
const ev = require('express-validation');

function addNewUser(req, res) {

  let email = req.body.email;
  let password = req.body.password;

  // if (!email) {
  //   res.setHeader("Content-Type", "application/json")
  //   res.status(400)
  //   res.end(JSON.stringify({code: 400, message: "foo"}));
  // // }
  // if (!password) {
  //   res.setHeader("Content-Type", "application/json")
  //   res.status(400)
  //   res.end(JSON.stringify({code: 400, message: "foo"}));
  // }


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
      res.end(u);
    })
    .catch(function (err) {
      res.setHeader("Content-Type", "application/json")
      res.status(400)
      res.end(JSON.stringify({code: 400, message: "foo"}));
    });
  });
}

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
