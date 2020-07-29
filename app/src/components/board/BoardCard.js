import React from 'react';
import { Card, Tag } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import moment from 'moment';
import './BoardCard.css';

function BoardCard({ board }) {
  const { id, name, completed, start_date, end_date } = board;
  const formatStartDate = moment(start_date).format('LLL');
  const formatEndDate = moment(end_date).format('LLL');

  return (
    <Card
      title={name}
      extra={
        <a href={`boards/${id}`}>
          <EyeOutlined className="view-board-icon" />{' '}
          View
        </a>
      }
    >
      <p>
        Status:{' '}
        {completed ? (
          <Tag color='success'>Completed</Tag>
        ) : (
          <Tag color='warning'>Pending</Tag>
        )}
      </p>
      <p>
        Start Date:{' '}
        <span className="board-date-wrapper">{formatStartDate}</span>
      </p>
      <p>
        End Date: <span className="board-date-wrapper">{formatEndDate}</span>
      </p>
    </Card>
  );
}

export default BoardCard;
