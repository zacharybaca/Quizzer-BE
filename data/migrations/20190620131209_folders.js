exports.up = function(knex, Promise) {
  return knex.schema.createTable("folders", tbl => {
    tbl.increments();
    tbl.string("folder_name");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("folders");
};
