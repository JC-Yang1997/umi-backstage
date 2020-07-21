import React, { useState, ReactNode } from 'react';
import { Layout, Menu } from 'antd';
import { Link, history } from 'umi';
import Cookie from 'js-cookie';
import styles from './index.less';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  HomeOutlined,
  HeartOutlined,
} from '@ant-design/icons';

const { Header, Content, Sider } = Layout;

interface Title {
  text: string;
}
interface Route {
  route: string;
  name: string;
  icon: ReactNode;
}

export default (props: any) => {
  const title: Title = {
    text: 'Hello UmiJs!',
  };
  const [text, setText] = useState(title.text);
  const [collapsed, setCollapsed] = useState(false);

  const menuData: Array<Route> = [
    { route: '/layout', name: '首页', icon: <HeartOutlined /> },
    { route: '/layout/home', name: 'home', icon: <HomeOutlined /> },
    { route: '/layout/user/1', name: '用户1', icon: <UserOutlined /> },
  ];

  const loginout = () => {
    Cookie.remove('userId');
    history.replace('/login');
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
        <div className={styles.logo} />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={[`/${history.location.pathname}`]}
        >
          {menuData.map(menu => (
            <Menu.Item key={`/${menu.route}`} icon={menu.icon}>
              <Link to={menu.route}>{menu.name}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            background: '#fff',
            padding: '0px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              },
            )}
            <span
              style={{ marginLeft: '20px' }}
              onClick={() => setText(text + '!')}
            >
              {text}
            </span>
          </>
          <span style={{ cursor: 'pointer' }} onClick={loginout}>
            退出登陆
          </span>
        </Header>
        <Content style={{ padding: '24px' }}>{props.children}</Content>
      </Layout>
    </Layout>
  );
};
