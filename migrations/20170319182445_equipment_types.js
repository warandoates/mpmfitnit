exports.up = knex => knex.schema.createTable('equipment_types', (table) => {
  table.increments('id').primary();
  table.string('name').notNullable();
});

exports.down = knex => knex.schema.dropTable('equipment_types');
