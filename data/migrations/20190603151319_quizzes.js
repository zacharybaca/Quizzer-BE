exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('quiz', tbl => {
        tbl.increments()
        tbl.string('category').notNullable();
        tbl.string('type').notNullable();
        tbl.string('difficulty').notNullable();
        tbl.string('question').notNullable();
        tbl.string('correct_answer').notNullable();
        tbl.string('incorrect_answers');
        tbl.integer('points').notNullable();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('quiz');
};