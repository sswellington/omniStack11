const knex = require('knex');
const configuration = require('../../knexfile');

const crossEnv = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

const connection = knex(crossEnv);

module.exports = connection;