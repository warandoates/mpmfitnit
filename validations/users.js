'use strict';

const Joi = require('joi');

module.exports.post = {
  body: {
    firs_name: Joi.string()
      .label('First Name')
      .required()
      .trim(),
    last_name: Joi.string()
      .label('Last Name')
      .required()
      .trim(),
    email: Joi.string()
      .label('Email')
      .required()
      .email()
      .trim(),
    hashed_password: Joi.string()
      .label('Password')
      .requried()
      .trim()
      .min(8),
    weight: Joi.number()
      .integer()
      .label('weight')
      .required()
      .trim(),
    user_intentions: Joi.string()
      .label('intentions')
      .required()
      .email()
      .trim()
  }
}

function isolateErrMessage(err){
	let errObject = err.errors[0];
	let field = errObject.field;
	let message = errObject.messages[0].split(`\" `)[1];
	let errMessage = `${field}: ${message}`;
	return errMessage;
}

module.exports.checkValError = function checkValidationError(err, req, res, next){
  if (err instanceof ev.ValidationError) {
    return res.status(err.status).json(isolateErrMessage(err));
  }
  next();
}
