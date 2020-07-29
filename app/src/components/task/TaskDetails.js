import React from 'react';
import { Drawer, Tag } from 'antd';
import './TaskDetails.css';

function TaskDetails({ task, visible, onClose }) {
  const {
    name,
    description,
    assignee,
    formatAddDate,
    status: { name: statusName },
  } = task;

  const getStatusTagColor = (status) => {
    switch (status) {
      case 'To Do':
        return 'gray';
      case 'In Progress':
        return 'lime';
      case 'In Test':
        return 'blue';
      case 'Done':
        return 'green';
      case 'Blocked':
        return 'purple';
      default:
        break;
    }
  };

  return (
    <Drawer
      title={name}
      width={500}
      placement='right'
      closable={false}
      onClose={onClose}
      visible={visible}
    >
      <Tag color={getStatusTagColor(statusName)}>{statusName}</Tag>
      <p className='task-description'>{description}</p>
      <p>Created on {formatAddDate}</p>
      <div>
        <p>Assignees:</p>
        {assignee.map((asgne) => (
          <p key={asgne.id}>{asgne.name}</p>
        ))}
      </div>
    </Drawer>
  );
}

export default TaskDetails;
