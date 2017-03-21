const bookshelf = require('../bookshelf');

require('./exercises');

let EquipmentTypes = bookshelf.Model.extend({
  tableName: 'equipment_types',
  exercises: function() {
    return this.hasMany('Exercises');
  }
});

module.exports = bookshelf.model('EquipmentTypes', EquipmentTypes);
