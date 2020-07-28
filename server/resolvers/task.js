const knex = require('../knex');
const { v4 } = require('uuid');
const uuidV4 = v4;

const resolver = {
  Query: {
    tasks: () => {
      return knex('task').select();
    },
    task: (parent, { id }, context, info) => {
      return knex('task').where('id', id).first();
    },
    taskStatus: () => {
      return knex('task_status').select();
    },
    taskStatusItem: (parent, { id }, context, info) => {
      return knex('task_status').where('id', id).first();
    }
  },
  Task: {
    status: ({ task_status_id }) => {
      return knex('task_status').where('id', task_status_id).first();
    },
    assignee: ({ id }) => {
      return knex.select('assignee.*').from('assignee')
        .leftJoin('task_assignee', 'assignee.id', 'task_assignee.assignee_id')
        .leftJoin('task', 'task_assignee.task_id', 'task_id')
        .where('task_assignee.task_id', id);
    }
  },
  Mutation: {
    addTask: async (parent, args, context) => {
      const { name, description, boardId, assigneeIds } = args.input;
      let addTaskResponse;

      if (name && description && boardId) {
        try {
          const todoTaskStatus = await knex('task_status').where('name', 'To Do').first();
          const addTaskId = uuidV4();

          const addTask = await knex('task').insert({
            id: addTaskId,
            name,
            description,
            task_status_id: todoTaskStatus.id,
            board_id: boardId
          });

          if (addTask.rowCount && (assigneeIds && assigneeIds.length)) {
            assigneeIds.forEach(async (assigneeId) => {
              if (assigneeId) {
                await knex('task_assignee').insert({
                  id: uuidV4(),
                  task_id: addTaskId,
                  assignee_id: assigneeId,
                });
              }
            });
          }

          addTaskResponse = {
            status: 'SUCCESS',
            action: 'ADD',
            entity: 'TASK',
            message: 'Successfully added task.',
          };
        } catch (error) {
          addTaskResponse = {
            status: 'FAILED',
            action: 'ADD',
            entity: 'TASK',
            message: JSON.stringify(error),
          };
        }
      } else {
        addTaskResponse = {
          status: 'FAILED',
          action: 'ADD',
          entity: 'TASK',
          message: 'Error: Incomplete parameters!',
        };
      }

      return addTaskResponse;
    }
  }
}

module.exports = resolver;