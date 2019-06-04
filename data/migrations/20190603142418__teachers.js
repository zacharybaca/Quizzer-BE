
exports.up = function(knex, Promise) {
    return knex.schema
      .createTable('teachers', tbl => {
          tbl.increments()
          tbl.string('name').notNullable();
          tbl.string('username').notNullable();
          tbl.string('email').notNullable();
          tbl.string('role').notNullable(); 
      });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('teachers');
  };
