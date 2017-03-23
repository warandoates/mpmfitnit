exports.up = knex => knex.schema.createTable('users', (table) => {
  table.increments('id').primary();
  table.string('first_name').notNullable().defaultTo('');
  table.string('last_name').notNullable().defaultTo('');
  table.string('email').notNullable().unique();
  table.specificType('hashed_password', 'char(60)').notNullable();
  table.integer('weight').notNull().defaultTo(0);
  table.string('user_intentions').notNullable().defaultTo('');
  table.timestamps(true, true);
});

exports.down = knex => knex.schema.dropTable('users');
