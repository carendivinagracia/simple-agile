import React from 'react';
import { Row, Col } from 'antd';
import { useQuery } from '@apollo/client';
import { GET_ALL_BOARDS } from '../../queries/queryBoard';
import Loading from '../Loading';
import GraphqlError from '../error/GraphqlError';
import NoData from '../error/NoData';
import BoardCard from './BoardCard';
import './BoardList.css';

function BoardList() {
  const { loading, error, data } = useQuery(GET_ALL_BOARDS);

  if (loading)
    return <Loading />;

  if (error)
    return <GraphqlError />;

  if (!loading && data && !data.boards.length)
    return <NoData />;

  if (!loading && data && data.boards.length) {
    return (
      <Row gutter={16}>
        {data.boards.map((board) => {
          return (
            <Col key={board.id} className='board-col' span={8}>
              <BoardCard board={board} />
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default BoardList;
