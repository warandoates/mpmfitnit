
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

function randomTricepsArray() {
  Exercises.forge().where('muscle_id', 'in', '16')
  .fetchAll()
  .then(allTriceps => JSON.parse(JSON.stringify(allTriceps)))
  .then((arrayTriceps) => {
    let oldArr = arrayTriceps;
    let finalResult = addExerciseToNewArr(oldArr, 3);
    console.log(finalResult);
    return finalResult;
  });
}

function randomChestArray() {
  Exercises.forge().where('muscle_id', 'in', '11')
  .fetchAll()
  .then(allChests => JSON.parse(JSON.stringify(allChests)))
  .then((arrayChests) => {
    let oldArr = arrayChests;
    let finalResult = addExerciseToNewArr(oldArr, 4);
    console.log(finalResult);
    return finalResult;
  });
}

function randomShouldersArray() {
  Exercises.forge().where('muscle_id', 'in', '12')
  .fetchAll()
  .then(allShoulders => JSON.parse(JSON.stringify(allShoulders)))
  .then((arrayShoulders) => {
    let oldArr = arrayShoulders;
    let finalResult = addExerciseToNewArr(oldArr, 4);
    console.log(finalResult);
    return finalResult;
  });
}


randomTricepsArray();
randomChestArray();
randomShouldersArray();


// function addExerciseToNewArr(array, num) {
//   let result = [];
//   while (result.length < num) {
//     result.push(getRandomElement(array));
//   }
//   return result;
// }
