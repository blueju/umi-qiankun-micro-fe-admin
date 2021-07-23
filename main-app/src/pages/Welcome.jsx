import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Avatar } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { history } from 'umi';

const { Meta } = Card;

export default () => {
  function toSubApp() {
    history.push('/sub-app-1');
  }
  return (
    <PageContainer>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[<LoginOutlined key="login" onClick={toSubApp} />]}
      >
        <Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title="sub-app-1"
          description="http://localhost:8001/"
        />
      </Card>
    </PageContainer>
  );
};
