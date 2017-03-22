const Muscles = require('../../models/muscles');

module.exports.getMuscleById = function(args, res, next) {
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
};

module.exports.getAllMuscles = function(args, res, next) {
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
};
