const Muscles = require('../../models/muscles');

module.exports.getMuscleById = function(req, res, next) {
  Muscles.where('id', req.swagger.params.id.value).fetch()
      .then((specificMuscle) => {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(specificMuscle));
      });
};

module.exports.getAllMuscles = function(req, res, next) {
  Muscles.fetchAll()
      .then((musclesList) => {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(musclesList));
      });
};
