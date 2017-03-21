
const Exercises = require('./models/exercises');
function randomTriceps() {
  Exercises.forge().where('muscle_id', 'in', '16')
  .fetchAll()
  .then((allTriceps) => {
    console.log((JSON.parse(JSON.stringify(allTriceps))));
    return (JSON.parse(JSON.stringify(allTriceps)));
  })
  .then((arrayTriceps) => {
    let oldArr = arrayTriceps;
    // console.log(oldArr);
    let finalResult = addExerciseToNewArr(oldArr, 3);
    // console.log(finalResult);
    return finalResult;
  });
}

randomTriceps();


function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + max;
};

function addExerciseToNewArr(array, num) {
  let arr = array;
  // console.log('my arrall: ', arr);
  const result = [];
  while (result.length < num) {
    let numBer = getRandomNum(0, arr.length);
    // console.log(numBer);
    // console.log(result);
    result.push(arr[numBer]);
  }
  return result;
}
