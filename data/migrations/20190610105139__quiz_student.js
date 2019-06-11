
exports.up = function(knex, Promise) {
  return knex.schema.createTable('quiz_student', tbl => {
    tbl.increments().unique();
    
    tbl.unique()
      .integer('student_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('students')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE') 
    
    tbl.unique()
      .integer('quiz_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('quizzes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
      
    tbl.integer('score').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('quiz_student');
};
