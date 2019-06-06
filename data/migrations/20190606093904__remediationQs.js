exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('remediation', tbl => {
        tbl.increments()
        tbl.string('category').notNullable();
        tbl.string('type').notNullable();
        tbl.string('difficulty').notNullable();
        tbl.string('question').notNullable();
        tbl.string('correct_answer').notNullable();
        tbl.string('incorrect_answers');
    });
};
  
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('remediation');
};
