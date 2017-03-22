const bookshelf = require('../bookshelf');

require('./routines');
require('./exercises');
let ExercisesRoutines = bookshelf.Model.extend({
  tableName: 'exercises_routines',
  routine: function() {
    return this.belongsToMany('Routines');
  },
  exercise: function () {
    return this.belongsToMany('Exercises');
  }
});

module.exports = bookshelf.model('ExercisesRoutines', ExercisesRoutines);
