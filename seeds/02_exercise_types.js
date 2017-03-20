exports.seed = knex => knex('exercise_types').del()
  .then(() => knex('exercise_types').insert([
    {
      id: 1,
      name: 'Cardio'
    },
    {
      id: 2,
      name: 'Olympic Weightlifting'
    },
    {
      id: 3,
      name: 'Plyometrics'
    },
    {
      id: 4,
      name: 'Powerlifting'
    },
    {
      id: 5,
      name: 'Strength'
    },
    {
      id: 6,
      name: 'Stretching'
    },
    {
      id: 7,
      name: 'Strongman'
    }
  ]));
