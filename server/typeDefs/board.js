const { gql } = require('apollo-server');

const board = gql`
  type Board {
    id: ID!
    name: String!
    completed: Boolean!
    start_date: DateTime!
    end_date: DateTime!
    tasks: [Task!]
  }

  input AddBoardInput {
    name: String!
    startDate: DateTime!
    endDate: DateTime!
  }

  extend type Query {
    boards: [Board!]!
    board(id: ID!): Board!
  }

  extend type Mutation {
    addBoard(input: AddBoardInput!): MutationResult!
  }
`;

module.exports = board;
