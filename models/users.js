const bookshelf = require('../bookshelf');

require('./routines');
let Users = bookshelf.Model.extend({
  tableName: 'users',
  hidden: ['hashed_password', 'email'],
  routine: function() {
    return this.hasMany('Routines');
  }
});

module.exports = bookshelf.model('Users', Users);
