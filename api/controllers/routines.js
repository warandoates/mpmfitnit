const Exercises = require('../../models/exercises');
const dotenv = require('dotenv').config();
const apiKey = process.env.YOUTUBE_KEY
const fetch = require('node-fetch');
// let query = 'dogs';
// https: //www.youtube.com/watch?v=0XFudmaObLI
function letsFetchSomeClips(query) {
    let fitnessChannel = 'UCiP6wD_tYlYLYh3agzbByWQ'
    return fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet,id&order=date&channelId=${fitnessChannel}&maxResults=5&q=${query}`)
        .then((response) => {
            return response.json();
        })
        .then((realRes) => {
            return youtubeUrls = realRes.items.map((ele) => {
                let obj = {};
                obj.url = `youtube.com/watch?v=${ele.id.videoId}`;
                obj.title = ele.snippet.title;
                obj.description = ele.snippet.description;
                return obj;
            });
        })
}

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

let bicAndForamsRoutine = function() {
    return Promise.all([getExercisesByGroup(3, '7'), getExercisesByGroup(1, '13')])
        .then(([resultBiceps, resultForArms]) => {
            let newArray = resultBiceps.concat(resultForArms);
            return newArray;
        })
        .catch((err) => {
            throw err;
        });
};

function routinesAndYoutubeResponse(muscle, int, intString) {
    return Promise.all([letsFetchSomeClips(muscle), getExercisesByGroup(int, intString)]);
}


module.exports.getRandomRoutines = function(req, res, next) {
    let muscleGroup = req.swagger.params.muscleGroup.value.toString();
    let newArray = [];
    switch (muscleGroup) {
        case 'triceps':
            return routinesAndYoutubeResponse(muscleGroup, 3, '16')
                .then(([apiRes, exerciseRes]) => {
                    newArray = exerciseRes.concat(apiRes);
                    res.setHeader('Content-Type', 'application/json');
                    return res.end(JSON.stringify(newArray));
                });
            break;
        case 'chest':
            return routinesAndYoutubeResponse(muscleGroup, 4, '11')
                .then(([apiRes, exerciseRes]) => {
                    newArray = exerciseRes.concat(apiRes);
                    res.setHeader('Content-Type', 'application/json');
                    return res.end(JSON.stringify(newArray));
                });
            break;
        case 'shoulders':
            return routinesAndYoutubeResponse(muscleGroup, 4, '12')
                .then(([apiRes, exerciseRes]) => {
                    newArray = exerciseRes.concat(apiRes);
                    res.setHeader('Content-Type', 'application/json');
                    return res.end(JSON.stringify(newArray));
                });
            break;
        case 'biceps':
            return Promise.all([letsFetchSomeClips(muscleGroup), bicAndForamsRoutine()])
                .then(([apiRes, exerciseRes]) => {
                    newArray = exerciseRes.concat(apiRes);
                    res.setHeader('Content-Type', 'application/json');
                    return res.end(JSON.stringify(newArray));
                })
            break;
        default:
            res.setHeader("Content-Type", "application/json")
            res.status(404).json({
                code: 404,
                message: "Not Found"
            });
    }
};
