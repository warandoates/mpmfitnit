
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(table) {
        table.integer('weight').notNull().defaultTo(0);
        table.string('user_intentions').notNullable().defaultTo('');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function(table) {
      table.dropColumn('weight');
      table.dropColumn('user_intentions');
  });
};
