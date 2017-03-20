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

module.exports.getAllExercises = function getAllExercises (req, res, next) {
  Default.getAllExercises(req.swagger.params, res, next);
};

module.exports.getAllRecipes = function getAllRecipes (req, res, next) {
  Default.getAllRecipes(req.swagger.params, res, next);
};

module.exports.getRecipeById = function getRecipeById (req, res, next) {
  Default.getRecipeById(req.swagger.params, res, next);
};

module.exports.getUserById = function getUserById (req, res, next) {
  Default.getUserById(req.swagger.params, res, next);
};

module.exports.patchUserProfile = function patchUserProfile (req, res, next) {
  Default.patchUserProfile(req.swagger.params, res, next);
};
