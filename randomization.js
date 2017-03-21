
const Exercises = require('./models/exercises');
var $ = require("jquery");
function randomTriceps() {
  Exercises.forge().where('muscle_id', 'in', '16')
  .fetchAll()
  .then((allTriceps) => {
    // console.log((JSON.parse(JSON.stringify(allTriceps))));
    return (JSON.parse(JSON.stringify(allTriceps)));
  })
  .then((arrayTriceps) => {
    let oldArr = arrayTriceps;
    let finalResult = addExerciseToNewArr(oldArr, 3);
    console.log(finalResult);
    return finalResult;
  });
}

randomTriceps();


function getRandomElement(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}

function addExerciseToNewArr(array, num) {
  let newSet = new Set();
  while (newSet.size < 3) {
    newSet.add(getRandomElement(array));
  }
  return [...newSet];
}

// function addExerciseToNewArr(array, num) {
//   let result = [];
//   while (result.length < num) {
//     result.push(getRandomElement(array));
//   }
//   return result;
// }
