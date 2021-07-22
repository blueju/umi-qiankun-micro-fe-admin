import React from 'react';
import { MicroApp } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';

class MicroAppLayout extends React.Component {
  constructor(props) {
    super(props);
    this.name = window.location.pathname.slice(1);
  }

  render() {
    return (
      <PageContainer>
        <MicroApp name={this.name} />
      </PageContainer>
    );
  }
}

export default MicroAppLayout;
