import * as React from 'react';
import { ComponentClass } from 'react';
import * as Icons from '@ant-design/icons';

type AllIcon = {
  [key: string]: ComponentClass;
};

export const filterIcons = [
  'default',
  'createFromIconfontCN',
  'getTwoToneColor',
  'setTwoToneColor',
];

const useAntdIcon = () => {
  const allIcon: AllIcon = Icons as any;

  const getIcon = (icon: string) => {
    return allIcon[icon];
  };

  const AntdIcon: React.FC<{ icon: string }> = ({ icon }) => {
    const Icon = getIcon(icon);
    return <Icon />;
  };

  return { AntdIcon, getIcon };
};

export default useAntdIcon;
