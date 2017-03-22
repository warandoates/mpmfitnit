// 'use strict';
// const Exercises = require('../../models/exercises');

// exports.addNewUser = function(args, res, next) {
//   /**
//    * Creates a new user in the database
//    *
//    * newUser NewUser new user to add to the database
//    * returns user
//    **/
//   var examples = {};
//   examples['application/json'] = {
//   "password" : "aeiou",
//   "last_name" : "aeiou",
//   "weight" : 123,
//   "id" : 123,
//   "first_name" : "aeiou",
//   "email" : "aeiou"
// };
//   if (Object.keys(examples).length > 0) {
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
//   } else {
//     res.end();
//   }
// }
//
// exports.deleterUser = function(args, res, next) {
//   /**
//    * deletes a single user from the database.
//    *
//    * id Integer ID of the user to delete
//    * no response value expected for this operation
//    **/
//   res.end();
// }





// exports.getUserById = function(args, res, next) {
//   /**
//    * Returns a user information based on a single ID. The user must be authorized to access.
//    *
//    * id Long ID of the user to fetch
//    * returns user
//    **/
//   var examples = {};
//   examples['application/json'] = {
//   "password" : "aeiou",
//   "last_name" : "aeiou",
//   "weight" : 123,
//   "id" : 123456789,
//   "first_name" : "aeiou",
//   "email" : "aeiou"
// };
//   if (Object.keys(examples).length > 0) {
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
//   } else {
//     res.end();
//   }
// }


// exports.patchUserProfile = function(args, res, next) {
//   /**
//    * updates specified properties of the specific user.
//    *
//    * id Long ID of specified user
//    * jsonPatch UpdateUser
//    * returns user
//    **/
//   var examples = {};
//   examples['application/json'] = {
//   "password" : "aeiou",
//   "last_name" : "aeiou",
//   "weight" : 123,
//   "id" : 123456789,
//   "first_name" : "aeiou",
//   "email" : "aeiou"
// };
//   if (Object.keys(examples).length > 0) {
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
//   } else {
//     res.end();
//   }
// }
