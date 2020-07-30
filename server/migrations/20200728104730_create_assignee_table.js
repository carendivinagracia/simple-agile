exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('assignee', function (table) {
    table.string('id', [36]).primary();
    table.string('name');
    table.string('email');
    table.dateTime('add_date').defaultTo(knex.fn.now(6));
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('assignee');
};
