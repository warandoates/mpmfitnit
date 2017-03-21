'use strict';
const Exercises = require('../models/exercises');
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

exports.deleterUser = function(args, res, next) {
  /**
   * deletes a single user from the database.
   *
   * id Integer ID of the user to delete
   * no response value expected for this operation
   **/
  res.end();
}

exports.findExerciseById = function(args, res, next) {

  Exercises.where('id', args.id.value).fetch({ withRelated: ['muscle', 'type', 'equipment'] })
  .then((specificExercise) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(specificExercise));
  });
  /**
   * Returns a specific exercise based on a single ID.
   *
   * id Integer ID of exercise to fetch
   * returns exercise
   **/
//   var examples = {};
//   examples['application/json'] = {
//   "bg_id" : 123456789,
//   "name" : "aeiou",
//   "description" : "aeiou",
//   "id" : 123456789,
//   "equipment_type" : "aeiou"
// };
//   if (Object.keys(examples).length > 0) {
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
//   } else {
//     res.end();
//   }
};

exports.getAllExercises = function(args, res, next) {
  Exercises.fetchAll({ withRelated: ['muscle', 'type', 'equipment'] })
  .then((exerciseList) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(exerciseList));
  });
};

exports.getAllMuscles = function(args, res, next) {
  /**
   * returns all muscle types
   *
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "size" : "aeiou",
  "name" : "aeiou",
  "id" : 123456789
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getMuscleById = function(args, res, next) {
  /**
   * Returns specific exercise type based on ID
   *
   * id Long id of muscle type to get
   * returns muscles
   **/
  var examples = {};
  examples['application/json'] = {
  "size" : "aeiou",
  "name" : "aeiou",
  "id" : 123456789
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getUserById = function(args, res, next) {
  /**
   * Returns a user information based on a single ID. The user must be authorized to access.
   *
   * id Long ID of the user to fetch
   * returns user
   **/
  var examples = {};
  examples['application/json'] = {
  "password" : "aeiou",
  "last_name" : "aeiou",
  "weight" : 123,
  "id" : 123456789,
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


exports.patchUserProfile = function(args, res, next) {
  /**
   * updates specified properties of the specific user.
   *
   * id Long ID of specified user
   * jsonPatch UpdateUser
   * returns user
   **/
  var examples = {};
  examples['application/json'] = {
  "password" : "aeiou",
  "last_name" : "aeiou",
  "weight" : 123,
  "id" : 123456789,
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

exports.getAllEquipmentTypes = function(args, res, next) {
  /**
   * returns all exercise types
   *
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "name" : "aeiou",
  "id" : 123456789
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}


exports.getEquipmentById = function(args, res, next) {
  /**
   * Returns specific exercise type based on ID
   *
   * id Long id of equipment type to get
   * returns equipment
   **/
  var examples = {};
  examples['application/json'] = {
  "name" : "aeiou",
  "id" : 123456789
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getExerciseTypeById = function(args, res, next) {
  /**
   * Returns specific exercise type based on ID
   *
   * id Long id of exercise type to get
   * returns exercise_types
   **/
  var examples = {};
  examples['application/json'] = {
  "name" : "aeiou",
  "id" : 123456789
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getAllExerciseTypes = function(args, res, next) {
  /**
   * returns all exercise types
   *
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "name" : "aeiou",
  "id" : 123456789
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}
