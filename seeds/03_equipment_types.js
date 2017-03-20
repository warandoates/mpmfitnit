exports.seed = knex => knex('equipment_types').del()
  .then(() => knex('equipment_types').insert([
    {
      id: 1,
      name: 'Bands'
    },
    {
      id: 2,
      name: 'Foam Roll'
    },
    {
      id: 3,
      name: 'Barbell'
    },
    {
      id: 4,
      name: 'Kettlebells'
    },
    {
      id: 5,
      name: 'Body Only'
    },
    {
      id: 6,
      name: 'Machine'
    },
    {
      id: 7,
      name: 'Cable'
    },
    {
      id: 8,
      name: 'Medicine Ball'
    },
    {
      id: 9,
      name: 'Dumbbell'
    },
    {
      id: 10,
      name: 'None'
    },
    {
      id: 11,
      name: 'E-Z Curl Bar'
    },
    {
      id: 12,
      name: 'Other'
    },
    {
      id: 13,
      name: 'Exercise Ball'
    }
  ]));
