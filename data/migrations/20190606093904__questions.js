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

    tbl.unique()
      .integer('quiz_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('quizzes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
  });
};
  
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('questions');
};
