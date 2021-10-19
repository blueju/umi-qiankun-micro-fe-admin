import React from 'react';
import { history } from 'umi';
import { Card, Avatar } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { mainAppName } from '@/utils/utils';

const { Meta } = Card;

export default () => {
  /* 前往子应用 */
  function toSubApp() {
    history.push('/sub-app-1');
  }

  function renderAppCard() {
    const { apps } = JSON.parse(localStorage.getItem(mainAppName));
    return apps.map((item) => {
      return (
        <Card
          key={item.name}
          style={{ width: 300 }}
          actions={[<LoginOutlined key="login" onClick={toSubApp} />]}
        >
          <Meta avatar={<Avatar src={item.icon} />} title={item.chinseName} description={item.entry} />
        </Card>
      );
    });
  }

  return <>{renderAppCard()}</>;
};
