
exports.up = function(knex, Promise) {
    return knex.schema
      .createTable('teacher', tbl => {
          tbl.increments()
          tbl.string('name').notNullable();
          tbl.string('username').notNullable();
          tbl.string('email').notNullable();
          tbl.string('role').notNullable(); 

          tbl
            .integer('student_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('students')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')

          // tbl
          //   .integer('student_name')
          //   .unsigned()
          //   .notNullable()
          //   .references('name')
          //   .inTable('students')
          //   .onDelete('RESTRICT')
          //   .onUpdate('CASCADE')  
      });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('teacher');
  };
