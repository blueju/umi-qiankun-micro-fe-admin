import React from 'react';
import { history } from 'umi';
import { Card, Avatar } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';

const { Meta } = Card;

export default () => {
  /* 前往子应用 */
  function toSubApp() {
    history.push('/sub-app-1');
  }

  return (
    <PageContainer>
      <Card style={{ width: 300 }} actions={[<LoginOutlined key="login" onClick={toSubApp} />]}>
        <Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title="sub-app-1"
          description="http://localhost:8001/"
        />
      </Card>
    </PageContainer>
  );
};
