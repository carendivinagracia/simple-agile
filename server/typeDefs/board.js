const { gql } = require('apollo-server');

const board = gql`
    scalar DateTime

    type Board {
        id: ID!
        name: String!
        completed: Boolean!
        startDate: DateTime!
        endDate: DateTime!
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
        addBoard(board: AddBoardInput!): Board!
    }
`;

module.exports = board;