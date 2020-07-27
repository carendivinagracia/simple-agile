const board = require('./board');
const task = require('./task');
const assignee = require('./assignee');
const merge = require('lodash/merge');

const resolvers = merge(board, task, assignee);

module.exports = resolvers;