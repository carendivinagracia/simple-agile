import { gql } from '@apollo/client';

export const ADD_TASK = gql`
  mutation AddTask($input: AddTaskInput!) {
    addTask(input: $input) {
      status
      message
      action
      entity
    }
  }
`;