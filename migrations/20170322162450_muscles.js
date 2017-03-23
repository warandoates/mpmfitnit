exports.up = knex => knex.schema.createTable('muscles', (table) => {
  table.increments('id').primary();
  table.string('name').notNullable();
  table.string('size').notNullable();
});

exports.down = knex => knex.schema.dropTable('muscles');
