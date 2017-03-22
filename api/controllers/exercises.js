'use strict';

const Exercises = require('../../models/exercises');
const ExerciseTypes = require('../../models/exercise_types');

var url = require('url');


module.exports.getAllExercises = function(req, res, next) {
  Exercises.fetchAll({ withRelated: ['muscle', 'type', 'equipment'] })
  .then((exerciseList) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(exerciseList));
  });
};



module.exports.findExerciseById = function(req, res, next) {
  Exercises.where('id', req.swagger.params.id.value).fetch({ withRelated: ['muscle', 'type', 'equipment'] })
  .then((specificExercise) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(specificExercise));
  });
};

module.exports.getAllExerciseTypes = function(args, res, next) {
    ExerciseTypes.fetchAll()
      .then((exerciseTypesList) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(exerciseTypesList));
      })
    /**
     * returns all exercise types
     *
     * returns List
     **/
  //   var examples = {};
  //   examples['application/json'] = [ {
  //   "name" : "aeiou",
  //   "id" : 123456789
  // } ];
  //   if (Object.keys(examples).length > 0) {
  //     res.setHeader('Content-Type', 'application/json');
  //     res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  //   } else {
  //     res.end();
  //   }
  }

let getExerciseTypeById = function(args, res, next) {
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

// module.exports = {
//   getAllExercises: getAllExercises,
//   findExerciseById: findExerciseById,
//   getAllExerciseTypes: getAllExerciseTypes,
//   getExerciseTypeById: getExerciseTypeById
// };
