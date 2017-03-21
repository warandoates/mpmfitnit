'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.addNewUser = function addNewUser (req, res, next) {
  
  Default.addNewUser(req.swagger.params, res, next);


};

module.exports.deleterUser = function deleterUser (req, res, next) {
  Default.deleterUser(req.swagger.params, res, next);
};

module.exports.findExerciseById = function findExerciseById (req, res, next) {
  Default.findExerciseById(req.swagger.params, res, next);
};

module.exports.getAllEquipmentTypes = function getAllEquipmentTypes (req, res, next) {
  Default.getAllEquipmentTypes(req.swagger.params, res, next);
};

module.exports.getAllExerciseTypes = function getAllExerciseTypes (req, res, next) {
  Default.getAllExerciseTypes(req.swagger.params, res, next);
};

module.exports.getAllExercises = function getAllExercises (req, res, next) {
  Default.getAllExercises(req.swagger.params, res, next);
};

module.exports.getAllMuscles = function getAllMuscles (req, res, next) {
  Default.getAllMuscles(req.swagger.params, res, next);
};

module.exports.getEquipmentById = function getEquipmentById (req, res, next) {
  Default.getEquipmentById(req.swagger.params, res, next);
};

module.exports.getExerciseTypeById = function getExerciseTypeById (req, res, next) {
  Default.getExerciseTypeById(req.swagger.params, res, next);
};

module.exports.getMuscleById = function getMuscleById (req, res, next) {
  Default.getMuscleById(req.swagger.params, res, next);
};

module.exports.getUserById = function getUserById (req, res, next) {
  Default.getUserById(req.swagger.params, res, next);
};

module.exports.patchUserProfile = function patchUserProfile (req, res, next) {
  Default.patchUserProfile(req.swagger.params, res, next);
};
