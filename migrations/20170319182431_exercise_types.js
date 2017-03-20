exports.up = knex => knex.schema.createTable('exercise_types', (table) => {
  table.increments('id').primary();
  table.string('name').notNullable();
});

exports.down = knex => knex.schema.dropTable('exercise_types');
