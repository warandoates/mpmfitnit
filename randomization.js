const Exercises = require('./models/exercises');

function getRandomElement(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}

function addExerciseToNewArr(array, num) {
  let newUniqExerciseSet = new Set();
  while (newUniqExerciseSet.size < num) {
    newUniqExerciseSet.add(getRandomElement(array));
  }
  return [...newUniqExerciseSet];
}

function getExercisesByGroup(numOfExercises, idInString) {
  return Exercises.forge().where('muscle_id', 'in', idInString)
  .fetchAll({
    withRelated: ['muscle', 'type', 'equipment']
  })
  .then(allExercises => allExercises.toJSON())
  .then((allExercisesJson) => {
    let oldArr = allExercisesJson;
    let exercisesSelectedArr = addExerciseToNewArr(oldArr, numOfExercises);
    console.log(exercisesSelectedArr);
    return exercisesSelectedArr;
  });
}

let triceps = getExercisesByGroup(3, '16');


function randomTricepsArray() {
  return Exercises.forge().where('muscle_id', 'in', '16')
  .fetchAll({
    withRelated: ['muscle', 'type', 'equipment']
  })
  .then(allTriceps => JSON.parse(JSON.stringify(allTriceps)))
  .then((arrayTriceps) => {
    let oldArr = arrayTriceps;
    let finalResult = addExerciseToNewArr(oldArr, 3);
    console.log(finalResult);
    return finalResult;
  });
}

function randomChestArray() {
  return Exercises.forge().where('muscle_id', 'in', '11')
  .fetchAll({
    withRelated: ['muscle', 'type', 'equipment']
  })
  .then(allChests => JSON.parse(JSON.stringify(allChests)))
  .then((arrayChests) => {
    let oldArr = arrayChests;
    let finalResult = addExerciseToNewArr(oldArr, 4);
    console.log(finalResult);
    return finalResult;
  });
}

function randomShouldersArray() {
  return Exercises.forge().where('muscle_id', 'in', '12')
  .fetchAll({
    withRelated: ['muscle', 'type', 'equipment']
  })
  .then(allShoulders => JSON.parse(JSON.stringify(allShoulders)))
  .then((arrayShoulders) => {
    let oldArr = arrayShoulders;
    let finalResult = addExerciseToNewArr(oldArr, 4);
    console.log(finalResult);
    return finalResult;
  });
}

function randomBicepsArray() {
  return Exercises.forge().where('muscle_id', 'in', '7')
  .fetchAll({
    withRelated: ['muscle', 'type', 'equipment']
  })
  .then(allBiceps => allBiceps.toJSON())
  .then((arrayBiceps) => {
    let oldArr = arrayBiceps;
    let finalResult = addExerciseToNewArr(oldArr, 3);
    // console.log(finalResult);
    return finalResult;
  })
  .catch((err) => {
    throw err;
  });
}

function randomForarmsArray() {
  return Exercises.forge().where('muscle_id', 'in', '13')
  .fetchAll({
    withRelated: ['muscle', 'type', 'equipment']
  })
  .then(allForarms => allForarms.toJSON())
  .then((arrayForarms) => {
    let oldArr = arrayForarms;
    let finalResult = addExerciseToNewArr(oldArr, 1);
    // console.log(finalResult);
    return finalResult;
  })
  .catch((err) => {
    throw err;
  });
}

function bicAndForamsArray() {
  let biceps = randomBicepsArray();
  let forarms = randomForarmsArray();
  return Promise.all([biceps, forarms])
  .then(([resultBiceps, resultForArms]) => {
    let newArray = resultBiceps.concat(resultForArms);
    console.log(newArray);
    return newArray;
  })
  .catch((err) => {
    throw err;
  });
}

// bicAndForamsArray();


// function addExerciseToNewArr(array, num) {
//   let result = [];
//   while (result.length < num) {
//     result.push(getRandomElement(array));
//   }
//   return result;
// }
