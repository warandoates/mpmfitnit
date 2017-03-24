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

function updateUser(req, res, next) {
  const id = req.swagger.params.id.value;
  return Users.where('id', '=', id)
  .fetch()
  .then((user) => {
    console.log(user);
    let userToUpdate = {}
    if (req.body.first_name) {
        userToUpdate.first_name = req.body.first_name;
    }
    if (req.body.last_name) {
      userToUpdate.last_name = req.body.last_name;
    }
    if (req.body.email) {
      userToUpdate.email = req.body.email;
    }
    if (req.body.weight) {
      userToUpdate.weight = req.body.weight;
    }
    if (req.body.user_intentions) {
      userToUpdate.user_intentions = req.body.user_intentions;
    }
    return user.save({ userToUpdate }, { patch: true });
  })
  .then((userUpdated) => {
    console.log('user changed info: ', userUpdated);
    console.log(JSON.parse(JSON.stringify(userUpdated)));
    return JSON.parse(JSON.stringify(userUpdated));
  })
    .catch(function(err) {
      res.setHeader("Content-Type", "application/json");
      res.status(400).json({
        code: 400,
        message: 'foo'
      });
    });
};


  //   user.save({
  //     first_name: req.body.first_name || user.get('first_name'),
  //     last_name: req.body.last_name || user.get('last_name'),
  //     email: req.body.email || user.get('email'),
  //     weight: req.body.weight || user.get('weight'),
  //     user_intentions: req.body.user_intentions || user.get('user_intentions'),
  //     hashed_password: req.body.password || user.get('hashed_password')
  //   }, {patch: true})
  // .then((user) => {
  //   console.log(user);
  //   let u = JSON.parse(JSON.stringify(user));
  //   console.log(u);
  //   delete u.hashed_password;
  //   res.setHeader('Content-Type', 'application/json');
  //   res.send(u);
  // })

    // return Users.where('id', '=', id)
    //     .fetch()
    //     .then((user) =>{
    //       if (!user) {
    //         return next();
    //       }
    //       return JSON.parse(JSON.stringify(user));
    //     })
    //     .save(
    //       {
    //         first_name: req.body.first_name || user.get('first_name'),
    //         last_name: req.body.last_name || user.get('last_name'),
    //         email: req.body.email || user.get('email'),
    //         weight: req.body.weight || user.get('weight'),
    //         user_intentions: req.body.user_intentions || user.get('user_intentions'),
    //         hashed_password: req.body.password || user.get('hashed_password')
    //       },
    //      {
    //         patch: true
    //     })
    //     .then((userResponse) => {
    //       console.log('i am user response',userResponse);
    //         let user = JSON.parse(JSON.stringify(userResponse));
    //         delete user.hashed_password;
    //         // if(req.body.first_name) {
    //         //   user.first_name = req.body.first_name
    //         // }
    //       console.log(user);
    //     })
    //     .then((user) => {
    //
    //     })
    //     .catch(function(err) {
    //         res.setHeader("Content-Type", "application/json")
    //         res.status(400).json({
    //             code: 400,
    //             message: "foo"
    //         });
    //     });
// };

function deleteUser(req, res, next) {
    Users.where('id', req.swagger.params.id)
        .fetch({
            require: true
        })
        .then((user) => {
            user.destroy()
            return user;
        })
        .then(() => {
            res.json({
                error: true,
                data: {
                    message: 'User sucessfully deleted'
                }
            });
        })
        .catch((err) => {
            res.status(500).json({
                error: true,
                data: {
                    message: err.message
                }
            });
        })
};

module.exports = {
    addNewUser: addNewUser,
    deleteUser: deleteUser,
    updateUser: updateUser
};
