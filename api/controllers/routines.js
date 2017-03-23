const Exercises = require('../../models/exercises');

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
            return exercisesSelectedArr;
        })
        .catch((err) => {
            throw err;
        });
}


module.exports.getRandomRoutines = function(req, res, next) {
      let muscleGroup = req.swagger.params.muscleGroup.value;
      // let newWord musclegroup.toString();
      if (muscleGroup.toString() === 'triceps') {

        return getExercisesByGroup(3, '16')
        .then((response) => {
          res.setHeader('Content-Type', 'application/json');
          return res.end(JSON.stringify(response));
        });
      } else if (muscleGroup.toString() === 'chest') {
        return getExercisesByGroup(4, '11')
        .then((response) => {
          res.setHeader('Content-Type', 'application/json');
          return res.end(JSON.stringify(response));
        });
      }
        // console.log("this is log", JSON.stringify(getExercisesByGroup(3, '16')));
  // console.log(getExercisesByGroup(3, '16'));
    // let muscleGroup = req.swagger.params.muscleGroup.value;
    // // console.log(muscleGroup);
    // if (muscleGroup == "triceps") {
    //     res.setHeader('Content-Type', 'application/json');
    //     // console.log(JSON.stringify(getExercisesByGroup(3, '16')));
    //     return res.end(JSON.stringify(getExercisesByGroup(3, '16')));
    //     // res.send(getExercisesByGroup(3, '16'));
    // } else {
    //     res.json('false')
    // }
    // let arr = [];
    // let val = muscleGroup[0];
    // let obj = {
    //   thisProp: val
    // };
    // let jsonedObjs = JSON.stringify(obj)
    //
    // arr.push(jsonedObjs);
    // console.log(arr);
    // res.json(getExercisesByGroup(3, '16'));

    // res.json('false')

    // next();
};
