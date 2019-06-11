exports.up = function(knex, Promise) {
  return knex.schema.createTable('questions', tbl => {
    tbl.increments().unique();
    tbl.string('category').notNullable();
    tbl.integer('type').notNullable();
    tbl.string('Q_content').notNullable();
    tbl.string('A').notNullable();
    tbl.string('B').notNullable();
    tbl.string('C');
    tbl.string('D');
    tbl.string('correct_answer').notNullable();
    tbl.integer('points');

    tbl
      .integer('quiz_id').unique()
      .unsigned()
      .notNullable()
      .references('id').unique()
      .inTable('quizzes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
  });
};
  
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('questions');
};
