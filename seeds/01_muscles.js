exports.seed = knex => knex('exercises').del()
  .finally(() => knex('muscles').del())
  .then(() => knex('muscles').insert([
    {
      id: 1,
      name: 'Abdominals',
      size: ''
    },
    {
      id: 2,
      name: 'Lats',
      size: ''
    },
    {
      id: 3,
      name: 'Abductors',
      size: ''

    },
    {
      id: 4,
      name: 'Lower Back',
      size: ''
    },
    {
      id: 5,
      name: 'Adductors',
      size: ''
    },
    {
      id: 6,
      name: 'Middle Back',
      size: ''
    },
    {
      id: 7,
      name: 'Biceps',
      size: ''
    },
    {
      id: 8,
      name: 'Neck',
      size: ''
    },
    {
      id: 9,
      name: 'Calves',
      size: ''
    },
    {
      id: 10,
      name: 'Quadriceps',
      size: ''
    },
    {
      id: 11,
      name: 'Chest',
      size: 'big'
    },
    {
      id: 12,
      name: 'Shoulders',
      size: 'small'
    },
    {
      id: 13,
      name: 'Forearms',
      size: ''
    },
    {
      id: 14,
      name: 'Traps',
      size: ''
    },
    {
      id: 15,
      name: 'Glutes',
      size: ''
    },
    {
      id: 16,
      name: 'Triceps',
      size: ''
    },
    {
      id: 17,
      name: 'Hamstrings',
      size: ''
    }
  ])
  );
