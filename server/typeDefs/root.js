const { gql } = require('apollo-server');

const root = gql`
  scalar DateTime
  
  type Query {
    root: String
  }

  type Mutation {
    root: String
  }

  enum MutationAction {
    ADD
    UPDATE
    DELETE
  }

  enum MutationStatus {
    SUCCESS
    FAILED
  }

  enum MutationEntity {
    ASSIGNEE
    BOARD
    TASK
    TASK_STATUS
  }

  type MutationResult {
    status: MutationStatus!
    message: String!
    action: MutationAction!
    entity: MutationEntity!
  }
`;

module.exports = root;