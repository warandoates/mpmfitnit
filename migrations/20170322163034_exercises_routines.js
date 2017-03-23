exports.up = knex => knex.schema.createTable('exercises_routines', (table) => {
  table.increments('id').primary();
  table.integer('exercise_id').notNullable().references('id').inTable('exercises');
  table.integer('routine_id').notNullable().references('id').inTable('routines');
});

exports.down = knex => knex.schema.dropTable('exercises_routines');
