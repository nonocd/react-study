import React from 'react';
import { Layout } from 'antd';

export type HeaderProps = {
  theme?: string;
  title?: string;
  logo?: string | React.ReactNode;
};

const renderLogo = (logo: string | React.ReactNode) => {
  if (!logo) {
    return null;
  }

  if (typeof logo === 'function') {
    return logo();
  }
  return logo;
};

const Header: React.FC<HeaderProps> = props => {
  const { logo } = props;
  return <Layout.Header>{renderLogo(logo)}</Layout.Header>;
};

export default Header;
