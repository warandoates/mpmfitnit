const bookshelf = require('../bookshelf');

require('./exercises');
var Muscles = bookshelf.Model.extend({
  tableName: 'muscles',
  exercises: function() {
    return this.hasMany('Exercises');
  }
});

module.exports = bookshelf.model('Muscles', Muscles);
