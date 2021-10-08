import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { SiderTheme } from 'antd/lib/layout/Sider';
import SiderMenu from './Menu/SiderMenu';
import Header from './Header/Header';
import logo from '@/assets/logo.svg';

import 'antd/dist/antd.css';
import './index.less';

export type Config = {
  title?: string;
  theme?: 'light' | 'dark';
  navTheme?: SiderTheme;
};

export default (props: { children?: ReactNode }) => {
  const config: Config = {
    title: 'Keep Admin',
    theme: 'light',
    navTheme: 'light',
  };

  const prefixCls = 'keep';
  const className = `${prefixCls}-layout`;
  const siderCls = `${prefixCls}-layout-sider`;

  return (
    <Layout className={className}>
      <Header title="React Study" logo={logo} />
      <Layout>
        <SiderMenu className={siderCls} theme={config.theme} />
        <Layout.Content>
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
