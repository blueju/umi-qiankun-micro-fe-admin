// @ts-ignore
import { history } from 'umi';
import { noop } from 'lodash';
import { Card, Avatar, Popover, Tooltip, Row, Col } from 'antd';
import React, { useEffect, useState } from 'react';
import {
  LoginOutlined,
  InfoCircleOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  WarningOutlined,
} from '@ant-design/icons';

import { mainAppName } from '@/utils/utils';
import { IApp } from '../../mock/apps';

const { Meta } = Card;
const { apps } = JSON.parse(localStorage.getItem(mainAppName));

/* 扩展了连通性状态的 app interface */
interface IAppWithConnectable extends IApp {
  connectable: boolean;
}

export default () => {
  const [appsWithConnectable, setAppsWithConnectable] = useState<IAppWithConnectable[]>(
    apps.map((item) => {
      return {
        ...item,
        connectable: false,
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
        newAppsWithConnectable[index].connectable = item.status === 'fulfilled';
      });
      setAppsWithConnectable(newAppsWithConnectable);
    });
  }

  /**
   * 渲染应用可连通性图标
   * @param connectable 是否可连通
   */
  function renderAppConnectableIcon(connectable) {
    return connectable ? (
      <CheckCircleOutlined style={{ color: '#52c41a' }} />
    ) : (
      <CloseCircleOutlined style={{ color: '#fe4d4f' }} />
    );
  }

  /**
   * 渲染应用入口图标
   * @param connectable 是否可连通
   * @param homepage    应用首页
   */
  function renderAppEntryIcon(connectable, homepage) {
    return connectable ? (
      <LoginOutlined key="login" onClick={connectable ? () => toSubApp(homepage) : noop} />
    ) : (
      <WarningOutlined style={{ color: '#faad14' }} />
    );
  }

  function renderAppCard() {
    return appsWithConnectable.map((item) => {
      return (
        <Col span={8} key={item.name}>
          <Card
            style={{ marginRight: 24, marginBottom: 24 }}
            actions={[
              <Tooltip key="appConnectable" title={`应用连通${item.connectable ? '正常' : '异常'}`}>
                <div>{renderAppConnectableIcon(item.connectable)}</div>
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
              <Tooltip key="appEntry" title={`应用${item.connectable ? '' : '不'}可访问`}>
                <div>{renderAppEntryIcon(item.connectable, item.homepage)}</div>
              </Tooltip>,
            ]}
          >
            <Meta
              avatar={<Avatar src={item.icon} />}
              title={item.chineseName}
              description={item.entry}
            />
          </Card>
        </Col>
      );
    });
  }

  useEffect(() => {
    checkAppConnection();
  }, []);

  return (
    <Row>
      <Col span={16}>
        <Row>{renderAppCard()}</Row>
      </Col>
      <Col span={8}>
        <Card title="待办事项" extra={<a href="#">更多</a>}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
    </Row>
  );
};
