import * as React from 'react';
import { Menu } from 'antd';
import { MenuDataItem } from '@/types/menu';
import useMenu from './useMenu';

export type MenuMode = 'horizontal' | 'vertical' | 'inline';

export type MenuTheme = 'light' | 'dark';

export type BaseMenuProps = {
  mode?: MenuMode;
  theme?: MenuTheme;
  inlineIndent?: number;
  openKeys?: string[];
  selectedKeys?: string[];
  inlineCollapsed?: boolean;
  menuData?: MenuDataItem[];
};

const BaseMenu: React.FC<BaseMenuProps> = props => {
  const { mode = 'inline', theme, inlineIndent, menuData = [] } = props;
  const { getNavMenuItems } = useMenu();
  return (
    <Menu key="Menu" mode={mode} theme={theme} inlineIndent={inlineIndent}>
      {getNavMenuItems(menuData)}
    </Menu>
  );
};

export default BaseMenu;
