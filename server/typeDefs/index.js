const root = require('./root');
const assignee = require('./assignee');
const board = require('./board');
const task = require('./task');
const taskStatus = require('./taskStatus');

const typeDefs = [
  root,
  assignee,
  board,
  task,
  taskStatus
];

module.exports = typeDefs;