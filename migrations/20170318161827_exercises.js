
exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('exercise_name').notNullable().defaultTo('');
    table.string('description').notNullable().defaultTo('');
    table.string('equipment_type').notNullable().efaultTo('');
    table.integer('routine_id').notNullable().references('id').inTable('routines');
  });
};

exports.down = (knex, Promise) => {

};
