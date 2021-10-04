import { ReactNode } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import { SiderTheme } from 'antd/lib/layout/Sider';
import SiderMenu from './Menu/SiderMenu';
import Header from './Header/Header';
import Home from '@/components/Home';

import 'antd/dist/antd.css';
import './index.less';
import About from '@/components/About';

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
      <Header />
      <Layout>
        <SiderMenu className={siderCls} theme={config.theme} />
        <Layout.Content>
          <Outlet />
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
