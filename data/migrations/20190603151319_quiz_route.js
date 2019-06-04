exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('quiz_route', tbl => {
        tbl.increments()
        tbl.string('quiz_name').notNullable();
        tbl.string('quiz_description').notNullable();
        tbl.string('quiz_question').notNullable();
        tbl.string('quiz_remediation_question').notNullable();
        tbl.integer('quiz_total_points').notNullable
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('quiz_route');
};