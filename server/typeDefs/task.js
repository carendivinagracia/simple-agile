const { gql } = require('apollo-server');

const task = gql`
    type Task {
        id: ID!
        name: String!
        description: String
        status: TaskStatus!
        assignee: [Assignee!]
        board: Board!
        add_date: DateTime!
        update_date: DateTime!
    }

    input AddTaskInput {
        name: String!
        description: String!
        boardId: ID!
    }

    extend type Query {
        tasks: [Task!]!
        task(id: ID!): Task!
    }

    extend type Mutation {
        addTask(task: AddTaskInput!): Task
    }
`;

module.exports = task;
