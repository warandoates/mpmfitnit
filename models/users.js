const bookshelf = require('../bookshelf');

// require('./exercises');
let Users = bookshelf.Model.extend({
  tableName: 'users'
});

module.exports = bookshelf.model('Users', Users);
