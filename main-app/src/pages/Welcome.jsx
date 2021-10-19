import React from 'react';
import { history } from 'umi';
import { Card, Avatar } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { mainAppName } from '@/utils/utils';

const { Meta } = Card;

export default () => {
  /**
   * 前往子应用
   * @param homepage 应用首页
   */
  function toSubApp(homepage) {
    history.push(homepage);
  }

  function renderAppCard() {
    const { apps } = JSON.parse(localStorage.getItem(mainAppName));
    return apps.map((item) => {
      return (
        <Card
          key={item.name}
          style={{ width: 300 }}
          actions={[<LoginOutlined key="login" onClick={() => toSubApp(item.homepage)} />]}
        >
          <Meta
            avatar={<Avatar src={item.icon} />}
            title={item.chineseName}
            description={item.entry}
          />
        </Card>
      );
    });
  }

  return <>{renderAppCard()}</>;
};
