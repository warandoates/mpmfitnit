const bookshelf = require('../bookshelf');

require('./muscles');
require('./exercise_types');
require('./equipment_types');

var Exercises = bookshelf.Model.extend({
  tableName: 'exercises',
  muscle: function() {
    return this.belongsTo('Muscles');
  },
  type: function() {
    return this.belongsTo('ExerciseTypes');
  },
  equipment: function() {
    return this.belongsTo('EquipmentTypes');
  }
});

module.exports = bookshelf.model('Exercises', Exercises);
