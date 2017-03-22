'use strict';



/**
* Creates a new user in the database
**/
const bcrypt = require('bcrypt-as-promised');
const Users = require('../../models/users');

function addNewUser(req, res, next) {

  bcrypt.hash(req.swagger.body.password, 12)
    .then((hashed_password) => {
      return Users.forge({
       first_name: req.swagger.body.firstName,
       last_name: req.swagger.body.lastName,
       email: req.swagger.body.email,
       hashed_password: hashed_password,
       weight: req.swagger.body.weight,
       intentions: req.swagger.body.intentions
      })
    })
    .save()
    .then((user) => {
      res.json({error: false, data: {id: user.get('id')}});
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });




  var examples = {};
  examples['application/json'] = {
  "password" : "aeiou",
  "last_name" : "aeiou",
  "weight" : 123,
  "id" : 123,
  "first_name" : "aeiou",
  "email" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }

  Users.fetchAll({ withRelated: ['']})

};



exports.addNewUser = function(args, res, next) {
  /**
   * Creates a new user in the database
   *
   * newUser NewUser new user to add to the database
   * returns user
   **/
  var examples = {};
  examples['application/json'] = {
  "password" : "aeiou",
  "last_name" : "aeiou",
  "weight" : 123,
  "id" : 123,
  "first_name" : "aeiou",
  "email" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}




module.exports.deleterUser = function deleterUser (req, res, next) {
  Default.deleterUser(req.swagger.params, res, next);
};
