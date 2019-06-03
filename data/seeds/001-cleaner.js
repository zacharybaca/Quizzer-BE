
const cleaner = require('knex-cleaner');

exports.seed = function(knex) {
  return cleaner.clean(knex); // this will clean all the tables and reset the primary keys
};
