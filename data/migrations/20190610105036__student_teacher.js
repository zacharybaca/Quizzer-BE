exports.up = function(knex, Promise) {
  return knex.schema.createTable('student_teacher', tbl => {
    tbl.increments().unique();

    tbl.unique()
      .integer('teacher_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('teachers')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
        
    tbl.unique()
      .integer('student_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('students')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE') 
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('student_teacher');
};
