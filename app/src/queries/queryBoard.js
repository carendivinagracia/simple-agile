import { gql } from '@apollo/client';

export const GET_ALL_BOARDS = gql`
  query GetAllBoards {
    boards {
      id
      name
      completed
      start_date
      end_date
    }
  }
`;

export const GET_BOARD = gql`
  query GetBoard($id: ID!) {
    board(id: $id) {
      id
      name
      completed
      start_date
      end_date
      tasks {
        id
        name
        description
        status {
          id
          name
        }
        assignee {
          id
          name
        }
        add_date
      }
    }
  }
`;