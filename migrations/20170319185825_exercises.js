exports.up = knex => knex.schema.createTable('exercises', (table) => {
  table.increments('id').primary();
  table.string('name').notNullable();
  table.integer('muscle_id').notNullable().references('id').inTable('muscles');
  table.integer('exercise_type_id').notNullable().references('id').inTable('exercise_types');
  table.integer('equipment_type_id').notNullable().references('id').inTable('equipment_types');
});

exports.down = knex => knex.schema.dropTable('exercises');
