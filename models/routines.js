const bookshelf = require('../bookshelf');

require('./users');
require('./exercises');
let Routines = bookshelf.Model.extend({
  tableName: 'routines',
  users: function() {
    return this.belongsTo('Users');
  },
  exercise: function () {
    return this.hasMany('Exercises');
  }
});

module.exports = bookshelf.model('Routines', Routines);
