import React, { useState } from 'react';
import { Card, Button } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import moment from 'moment';
import TaskDetails from './TaskDetails';

function TaskCard({ task }) {
  const [taskDetailsVisible, showTaskDetails] = useState(false);

  const showTaskDetailsDrawer = () => {
    showTaskDetails(true);
  };

  const hideTaskDetailsDrawer = () => {
    showTaskDetails(false);
  };

  const { name, description, add_date } = task;
  const formatAddDate = moment(add_date).format('LLL');

  return (
    <>
      <Card
        title={name}
        extra={
          <Button
            type='link'
            icon={<EyeOutlined className='view-board-icon' />}
            onClick={showTaskDetailsDrawer}
          >
            Details
          </Button>
        }
      >
        <p>{description}</p>
        <p>Created on {formatAddDate}</p>
      </Card>
      <TaskDetails
        task={{ ...task, formatAddDate }}
        visible={taskDetailsVisible}
        onClose={hideTaskDetailsDrawer}
      />
    </>
  );
}

export default TaskCard;
