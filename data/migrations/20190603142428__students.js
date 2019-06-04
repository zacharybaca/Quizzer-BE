
exports.up = function(knex, Promise) {
    return knex.schema
      .createTable('students', tbl => {
          tbl.increments()
          tbl.string('name').notNullable();
          tbl.string('username').notNullable();
          tbl.string('email').notNullable();
          tbl.string('role').notNullable(); 
      });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('students');
  };
