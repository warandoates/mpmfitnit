const bookshelf = require('../bookshelf');

// require('./exercises');
require('./routines');
let Users = bookshelf.Model.extend({
  tableName: 'users',
  routine: function() {
    return this.hasMany('Routines');
  }
  }
});

module.exports = bookshelf.model('Users', Users);
