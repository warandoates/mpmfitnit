'use strict';
const Exercises = require('../../models/exercises');

exports.getAllExercises = function(args, res, next) {
  Exercises.fetchAll({ withRelated: ['muscle', 'type', 'equipment'] })
  .then((exerciseList) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(exerciseList));
  });
};
