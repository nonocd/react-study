import React from 'react';
import { Layout } from 'antd';

export type HeaderProps = {
  title?: string;
  logo?: string | React.ReactNode;
  theme?: string;
};

const renderLogo = (logo: string | React.ReactNode) => {
  if (!logo) {
    return null;
  }

  if (typeof logo === 'function') {
    return logo();
  }

  if (typeof logo === 'string') {
    return <img src={logo} />;
  }

  return logo;
};

const Header: React.FC<HeaderProps> = props => {
  const { title, logo, children } = props;
  const className = 'keep-layout-header';

  return (
    <Layout.Header className={className}>
      <div>
        <a className="logo">
          {renderLogo(logo)}
          <h1>{title}</h1>
        </a>
      </div>
      <div style={{ flex: 1 }}>{children}</div>
      <div>right content</div>
    </Layout.Header>
  );
};

export default Header;
