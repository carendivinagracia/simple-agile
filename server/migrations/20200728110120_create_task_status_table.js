exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('task_status', function (table) {
    table.string('id', [36]).primary();
    table.string('name');
    table.string('description');
    table.dateTime('add_date').defaultTo(knex.fn.now(6));
    table.dateTime('update_date').defaultTo(knex.fn.now(6));
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('task_status');
};
