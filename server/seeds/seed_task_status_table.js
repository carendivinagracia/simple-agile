const { v4 } = require('uuid');
const uuidV4 = v4;

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task_status').del()
    .then(function () {
      // Inserts seed entries
      return knex('task_status').insert([
        { id: uuidV4(), name: 'To Do', description: 'To do task item' },
        { id: uuidV4(), name: 'In Progress', description: 'In progress task item' },
        { id: uuidV4(), name: 'In Test', description: 'To test task item' },
        { id: uuidV4(), name: 'Done', description: 'Done task item' },
        { id: uuidV4(), name: 'Blocked', description: 'Blocked task item' },
      ]);
    });
};
