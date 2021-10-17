import React from 'react';
import { MicroApp } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';

class MicroAppLayout extends React.Component {
  constructor(props) {
    super(props);
    // 数组解构赋值，直接取第二项
    const [, currentAppName = ''] = window.location.hash.split('/');
    // 当前应用名称
    this.currentAppName = currentAppName;
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
