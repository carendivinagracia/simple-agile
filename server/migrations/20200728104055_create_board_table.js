
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('board', function(table) {
    table.string('id', [36]).primary();
    table.string('name');
    table.boolean('completed');
    table.dateTime('start_date').defaultTo(knex.fn.now(6));
    table.dateTime('end_date').defaultTo(knex.fn.now(6));
  });
};
  
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('board');
};
