// @ts-ignore
import { history } from 'umi';
import { Card, Avatar, Popover, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';
import {
  LoginOutlined,
  InfoCircleOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  SyncOutlined,
} from '@ant-design/icons';

import { mainAppName } from '@/utils/utils';
import { IApp } from '../../mock/apps';

const { Meta } = Card;
const { apps } = JSON.parse(localStorage.getItem(mainAppName));

/* app 连通性状态 */
const appConnectableStatus = {
  pending: 'pending',
  true: 'true',
  false: 'false',
};

/* 扩展了连通性状态的 app interface */
interface IAppWithConnectable extends IApp {
  connectable: string;
}

export default () => {
  const [appsWithConnectable, setAppsWithConnectable] = useState<IAppWithConnectable[]>(
    apps.map((item) => {
      return {
        ...item,
        connectable: 'pending',
      };
    }),
  );

  /**
   * 前往子应用
   * @param homepage 应用首页
   */
  function toSubApp(homepage: string) {
    history.push(homepage);
  }

  /* 检测应用连通性 */
  function checkAppConnection() {
    const connectAppsPromiseList: Promise<Response>[] = appsWithConnectable.map((item) => {
      return fetch(item.entry);
    });
    const newAppsWithConnectable = [...appsWithConnectable];
    // @ts-ignore
    Promise.allSettled(connectAppsPromiseList).then((res) => {
      res.forEach((item, index) => {
        newAppsWithConnectable[index].connectable =
          item.status === 'fulfilled' ? appConnectableStatus.true : appConnectableStatus.false;
      });
      setAppsWithConnectable(newAppsWithConnectable);
    });
  }

  function renderAppConnectable(connectable) {
    switch (connectable) {
      case true:
        return <CheckCircleOutlined style={{ color: '#52c41a' }} />;
      case false:
        return <CloseCircleOutlined style={{ color: '#fe4d4f' }} />;
      default:
        return <SyncOutlined spin />;
    }
  }

  function renderAppCard() {
    return appsWithConnectable.map((item) => {
      return (
        <Card
          key={item.name}
          style={{ width: 300 }}
          actions={[
            <Tooltip key="appConnectable" title="应用连通性">
              <div>{renderAppConnectable(item.connectable)}</div>
            </Tooltip>,
            <Popover
              key="appInfo"
              title="应用信息"
              placement="topRight"
              arrowPointAtCenter
              content={
                <>
                  <p>应用名称（ID）：{item.name}</p>
                  <p>应用名称（中文）：{item.chineseName}</p>
                  <p>应用入口：{item.entry}</p>
                  <p>应用首页：{item.homepage}</p>
                </>
              }
            >
              <InfoCircleOutlined />
            </Popover>,
            <LoginOutlined key="login" onClick={() => toSubApp(item.homepage)} />,
          ]}
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

  useEffect(() => {
    checkAppConnection();
  }, []);

  return <>{renderAppCard()}</>;
};
