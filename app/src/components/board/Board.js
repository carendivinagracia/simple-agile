import React, { useState } from 'react';
import { PageHeader, Tag, Button, Steps } from 'antd';
import { FlagOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { useQuery } from '@apollo/client';
import { GET_BOARD } from '../../queries/queryBoard';
import moment from 'moment';
import Loading from '../Loading';
import GraphqlError from '../error/GraphqlError';
import NoData from '../error/NoData';
import TaskList from '../task/TaskList';
import AddTaskModal from '../task/AddTaskModal';

const { Step } = Steps;

function Board({
  match: {
    params: { boardId },
  },
  history,
}) {
  const [addTaskModalVisible, showAddTask] = useState(false);

  const showAddTaskModal = () => {
    showAddTask(true);
  };

  const hideAddTaskModal = () => {
    showAddTask(false);
  };

  const { loading, error, data } = useQuery(GET_BOARD, {
    variables: { id: boardId },
  });

  if (loading) return <Loading />;

  if (error) return <GraphqlError />;

  if (!loading && data && !data.board) return <NoData />;

  const { name, start_date, end_date, completed, tasks } = data.board;
  const formatStartDate = moment(start_date).format('LL');
  const formatEndDate = moment(end_date).format('LL');

  return (
    <>
      <PageHeader
        ghost={false}
        onBack={() => history.push('/boards')}
        title={name}
        subTitle='Lorem ipsum dolor sit amet'
        tags={
          completed ? (
            <Tag color='success'>Completed</Tag>
          ) : (
            <Tag color='warning'>Pending</Tag>
          )
        }
        extra={[<Button key='add-task' onClick={showAddTaskModal}>Add Task</Button>]}
        avatar={{
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQceqjnFfPr1h-4G9kLqgQGr_SZdZYkEDc_ow&usqp=CAU',
        }}
      >
        <Steps current={completed ? 1 : 0}>
          <Step
            title='Start'
            description={formatStartDate}
            icon={<FlagOutlined />}
          />
          <Step
            title='End'
            description={formatEndDate}
            icon={<CheckCircleOutlined />}
          />
        </Steps>
        {tasks && tasks.length ? <TaskList tasks={tasks} /> : <NoData />}
      </PageHeader>
      {addTaskModalVisible ? (
        <AddTaskModal
          boardId={boardId}
          visible={addTaskModalVisible}
          onClose={hideAddTaskModal}
          refetchBoard={GET_BOARD}
        />
      ) : null}
    </>
  );
}

export default Board;
