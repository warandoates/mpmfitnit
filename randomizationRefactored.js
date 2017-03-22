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
  })
  .catch((err) => {
    throw err;
  });
}

let tricepsRoutine = getExercisesByGroup(3, '16');
let chestRoutine = getExercisesByGroup(4, '11');
let shouldersRoutine = getExercisesByGroup(4, '12');
let bicAndForamsRoutine = function () {
  return Promise.all([getExercisesByGroup(3, '7'), getExercisesByGroup(1, '13')])
  .then(([resultBiceps, resultForArms]) => {
    let newArray = resultBiceps.concat(resultForArms);
    console.log(newArray);
    return newArray;
  })
  .catch((err) => {
    throw err;
  });
}
bicAndForamsRoutine();
