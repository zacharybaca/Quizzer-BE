exports.up = function(knex, Promise) {
  return knex.schema.createTable('questions', tbl => {
    tbl.increments();
    tbl.string('category').notNullable();
    tbl.integer('type').notNullable();
    tbl.string('Q_content').notNullable();
    tbl.string('A').notNullable();
    tbl.string('B').notNullable();
    tbl.string('C');
    tbl.string('D');
    tbl.binary('correct_answer').notNullable().unique();
    tbl.integer('points');

    tbl
      .integer('quiz_id')
      .unsigned()
      .references('id')
      .inTable('quizzes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
  });
};
  
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('questions');
};
