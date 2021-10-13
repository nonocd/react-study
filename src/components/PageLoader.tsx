import * as React from 'react';
import { Spin, SpinProps } from 'antd';

const PageLoader: React.FC<SpinProps & any> = () => {
  return (
    <div style={{ paddingTop: 100, textAlign: 'center' }}>
      <Spin size="large" />
    </div>
  );
};

export default PageLoader;
