exports.up = knex => knex.schema.createTable('routines', (table) => {
  table.increments('id').primary();
  table.string('name').notNullable();
  table.string('intention').notNullable();
  table.integer('user_id').notNullable().references('id').inTable('users');
});

exports.down = knex => knex.schema.dropTable('routines');
