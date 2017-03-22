'use strict';
const Exercises = require('../../models/exercises');

<<<<<<< HEAD
// operationId `getAllExercises` references this function
function getAllExercises(args, res, next) {
=======
let getAllExercises = function(args, res, next) {
>>>>>>> 32bcec03eba7733c77913354663711dc06b29e8e
  Exercises.fetchAll({ withRelated: ['muscle', 'type', 'equipment'] })
  .then((exerciseList) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(exerciseList));
  });
};


module.exports = {
  getAllExercises: getAllExercises
}
