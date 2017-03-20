const env = process.env.NODE_ENV || 'development';
const knexconfig = require('./knexfile')[env];
const knex = require('knex')(knexconfig);

module.exports = knex;
