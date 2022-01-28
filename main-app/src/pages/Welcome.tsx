import { noop } from 'lodash';
// @ts-ignore
import { history, Link, connect } from 'umi';
import React, { useEffect, useState } from 'react';
import { Card, Avatar, Popover, Tooltip, Row, Col } from 'antd';
import {
  LoadingOutlined,
  InfoCircleOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons';

// @ts-ignore
import styles from './Welcome.less';

const { Meta } = Card;

/* app 连接状态 */
const appConnectionStatus: IAppConnectionStatus = {
  pending: 'pending',
  resolve: 'resolve',
  reject: 'reject',
};

function Welcome(props) {
  // 带 app 连接状态的应用信息列表
  const [appsWithConnectionStatus, setAppsWithConnectionStatus] = useState<
    IAppWithConnectionStatus[]
  >(
    props.apps.map((item) => {
      return {
        ...item,
        connectionStatus: 'pending',
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
    appsWithConnectionStatus.forEach((item, index) => {
      fetch(item.entry).then((res) => {
        const status =
          res.status === 200 ? appConnectionStatus.resolve : appConnectionStatus.reject;
        const newAppsWithConnectionStatus = [...appsWithConnectionStatus];
        newAppsWithConnectionStatus[index].connectionStatus = status;
        setAppsWithConnectionStatus(newAppsWithConnectionStatus);
      });
    });
  }

  /**
   * 渲染应用可连通性图标
   * @param connectionStatus 连通状态
   */
  function renderAppConnectionStatusIcon(connectionStatus) {
    switch (connectionStatus) {
      case appConnectionStatus.pending:
        return <LoadingOutlined />;
      case appConnectionStatus.resolve:
        return <CheckCircleOutlined style={{ color: styles.successColor }} />;
      case appConnectionStatus.reject:
        return <CloseCircleOutlined style={{ color: styles.errorColor }} />;
      default:
        return <LoadingOutlined />;
    }
  }

  /**
   * 渲染应用入口图标
   * @param connectionStatus 连通状态
   * @param homepage    应用首页
   */
  function renderAppEntryIcon(connectionStatus, homepage) {
    return connectionStatus === appConnectionStatus.resolve ? (
      <a onClick={connectionStatus ? () => toSubApp(homepage) : noop}>进入</a>
    ) : null;
  }

  /* 渲染权限管理卡片 */
  function renderRbacCard() {
    return (
      <Col span={8}>
        <Card
          style={{ marginRight: 24, marginBottom: 24 }}
          actions={[<Link to="/main-app/">进入</Link>]}
        >
          <Meta
            avatar={
              <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
            }
            title="权限管理"
            description={window.location.origin}
          />
        </Card>
      </Col>
    );
  }

  /* 渲染应用卡片 */
  function renderAppCard() {
    return appsWithConnectionStatus.map((item) => {
      return (
        <Col span={8} key={item.name}>
          <Card
            style={{ marginRight: 24, marginBottom: 24 }}
            actions={[
              <Tooltip
                key="appConnectionStatus"
                title={`应用连通${
                  item.connectionStatus === appConnectionStatus.resolve ? '正常' : '异常'
                }`}
              >
                <div>{renderAppConnectionStatusIcon(item.connectionStatus)}</div>
              </Tooltip>,
              <Popover
                key="appInfo"
                title="应用信息"
                placement="top"
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
              <>{renderAppEntryIcon(item.connectionStatus, item.homepage)}</>,
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
        <Row>
          {renderRbacCard()}
          {renderAppCard()}
        </Row>
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
}

const mapStateToProps = (state) => {
  const { apps = [], routes = [] } = state.global;
  return {
    apps,
    routes,
  };
};

export default connect(mapStateToProps)(Welcome);
