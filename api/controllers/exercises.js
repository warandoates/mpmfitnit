'use strict';
const Exercises = require('../../models/exercises');

// operationId `getAllExercises` references this function

function getAllExercises(req, res, next) {
  Exercises.fetchAll({ withRelated: ['muscle', 'type', 'equipment'] })
  .then((exerciseList) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(exerciseList));
  });
};


module.exports = {
  getAllExercises: getAllExercises
}
