const bookshelf = require('../bookshelf');

var Muscles = bookshelf.Model.extend({
  tableName: 'muscles',
  exercises: function() {
    return this.hasMany(Exercises);
  }
});

var ExerciseTypes = bookshelf.Model.extend({
  tableName: 'exercise_types'
});

var EquipmentTypes = bookshelf.Model.extend({
  tableName: 'equipment_types'
});

var Exercises = bookshelf.Model.extend({
  tableName: 'exercises',
  muscle: function() {
    return this.belongsTo(Muscles);
  },
  type: function() {
    return this.belongsTo(ExerciseTypes);
  },
  equipment: function() {
    return this.belongsTo(EquipmentTypes);
  }
});

module.exports = bookshelf.model('Exercises', Exercises);
