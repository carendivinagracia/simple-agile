const { gql } = require('apollo-server');

const taskStatus = gql`
  type TaskStatus {
    id: ID!
    name: String!
    description: String!
    add_date: DateTime!
    update_date: DateTime!
  }

  extend type Query {
    taskStatus: [TaskStatus!]!
    taskStatusItem(id: ID!): TaskStatus!
  }
`;

module.exports = taskStatus;
