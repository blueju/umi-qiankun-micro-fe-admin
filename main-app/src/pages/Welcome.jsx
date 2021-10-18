import React from 'react';
import { history } from 'umi';
import { Card, Avatar } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

const { Meta } = Card;

export default () => {
  /* 前往子应用 */
  function toSubApp() {
    history.push('/sub-app-1');
  }

  return (
    <Card style={{ width: 300 }} actions={[<LoginOutlined key="login" onClick={toSubApp} />]}>
      <Meta
        avatar={<Avatar src="https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png" />}
        title="sub-app-1"
        description="http://localhost:8001/"
      />
    </Card>
  );
};
