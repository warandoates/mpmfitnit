
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          first_name: 'Mary',
          last_name: 'Lai',
          email: 'marylovesserverside@yeehaw.com',
          hashed_password: '$2a$12$81WmMv01NoUDmXsqmxck8epmWYDAD4ZNhjz6l98g9N9jxBRHTUmpq', // followthewhiterabbit
          created_at: new Date('2017-03-20 12:12:12 UTC'),
          updated_at: new Date('2017-03-20 12:12:12 UTC')
        }
      ]);
    });
};
