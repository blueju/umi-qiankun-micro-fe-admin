import React from 'react';
import { MicroApp } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import { getCurrentAppName } from '@/utils/utils';

class MicroAppLayout extends React.Component {
  constructor(props) {
    super(props);
    // 当前应用名称
    this.currentAppName = getCurrentAppName();
  }

  render() {
    return (
      <PageContainer>
        <MicroApp name={this.currentAppName} />
      </PageContainer>
    );
  }
}

export default MicroAppLayout;
