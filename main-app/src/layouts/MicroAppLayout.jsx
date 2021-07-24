import React from 'react';
import { MicroApp } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';

class MicroAppLayout extends React.Component {
  constructor(props) {
    super(props);
    const [, currentAppName = ''] = window.location.hash.split('/');
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
