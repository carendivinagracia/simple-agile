import React from 'react';
import { Result } from 'antd';

function NoData() {
  return (
    <Result
    status="404"
    title="No data"
    subTitle="Sorry, no data to be displayed."
  />
  );
}

export default NoData;
