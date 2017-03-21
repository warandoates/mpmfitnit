const bookshelf = require('../bookshelf');

require('./exercises');

var ExerciseTypes = bookshelf.Model.extend({
  tableName: 'exercise_types',
  exercises: function() {
    return this.hasMany('Exercises');
  }
});

module.exports = bookshelf.model('ExerciseTypes', ExerciseTypes);
