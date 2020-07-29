import React from 'react';
import { Result } from 'antd';

function GraphqlError() {
  return (
    <Result status='500' title='500' subTitle='Sorry, something went wrong.' />
  );
}

export default GraphqlError;
