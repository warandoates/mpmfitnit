'use strict';

const Exercises = require('../../models/exercises');
const ExerciseTypes = require('../../models/exercise_types');

var url = require('url');



module.exports.getAllExercises = function(req, res, next) {
  Exercises.where('id', '<', '25').fetchAll({ withRelated: ['muscle', 'type', 'equipment'] })
  .then((exerciseList) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(exerciseList));
  })
  .catch((err) => {
    res.sendStatus(404);
    next(err);
  });
};

module.exports.findExerciseById = function(req, res, next) {
  Exercises.where('id', req.swagger.params.id.value).fetch({ withRelated: ['muscle', 'type', 'equipment'] })
  .then((specificExercise) => {
    if(!specificExercise) {
      res.sendStatus(404);
      return next();
    }
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(specificExercise));
  })
  .catch((err) => {

    // res.sendStatus(404);
    next(err);
  });
};

module.exports.getAllExerciseTypes = function(args, res, next) {
    ExerciseTypes.fetchAll()
      .then((exerciseTypesList) => {
        res.setHeader('Content-Type', 'application/json');
        // console.log(JSON.stringify(exerciseTypesList));
        res.end(JSON.stringify(exerciseTypesList));
      });
  };

module.exports.getExerciseTypeById = function(req, res, next) {
    ExerciseTypes.where('id', req.swagger.params.id.value).fetch()
      .then((response) => {
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
      })
};
