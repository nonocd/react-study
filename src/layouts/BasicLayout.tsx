import { ReactNode } from 'react';
import { Layout } from 'antd';
import { SiderTheme } from 'antd/lib/layout/Sider';
import Home from '@/components/Home';

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

  const prefixCls = 'keep-layout';
  const className = prefixCls;
  const siderCls = `${prefixCls}-sider`;

  return (
    <Layout className={className}>
      <Layout.Header></Layout.Header>
      <Layout>
        <Layout.Sider className={siderCls} theme={config.theme}></Layout.Sider>
        <Layout.Content>
          <Home />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
