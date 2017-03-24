exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([{
          id: 1,
          first_name: 'Mary',
          last_name: 'Lai',
          email: 'marylovesserverside@yeehaw.com',
          hashed_password: '$2a$12$81WmMv01NoUDmXsqmxck8epmWYDAD4ZNhjz6l98g9N9jxBRHTUmpq', // followthewhiterabbit
          weight: 22,
          user_intentions: 'I want to gain muscle',
          created_at: new Date('2017-03-20 12:12:12 UTC'),
          updated_at: new Date('2017-03-20 12:12:12 UTC')
        }]);
      })
      .then(() => {
            return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
          });
};
