exports.up = function(knex, Promise) {
  return knex.schema.createTable('student_answers', tbl => {
    tbl.increments();
    tbl.string('student_answer').notNullable();

    tbl
      .integer('student_id')
      .unsigned()
      .references('id')
      .inTable('students')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE') 
    
    tbl
      .integer('question_id')
      .unsigned()
      .references('id')
      .inTable('questions')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')

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
  return knex.schema.dropTableIfExists('student_answers');
};
