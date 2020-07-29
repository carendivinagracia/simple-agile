import React from 'react';
import { Row, Col } from 'antd';
import TaskCard from './TaskCard';
import './TaskList.css';

function TaskList({ tasks }) {
  return (
    <Row className='tasklist-row' gutter={16}>
      {tasks.map((task) => {
        return (
          <Col key={task.id} className='task-col' span={8}>
            <TaskCard task={task} />
          </Col>
        );
      })}
    </Row>
  );
}

export default TaskList;
