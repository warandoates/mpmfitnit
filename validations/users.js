'use strict';

const Joi = require('joi');

module.exports.post = {
  body: {
    firstName: Joi.string()
      .label('First Name')
      .required()
      .trim(),
    lastName: Joi.string()
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
      .min(8)
  }
}
