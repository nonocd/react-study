import { Layout, Menu } from 'antd';
import { SiderTheme } from 'antd/lib/layout/Sider';
import { NavLink } from 'react-router-dom';

const { Sider } = Layout;

export type MenuProps = {
  className?: string;
  theme?: SiderTheme;
  width?: number;
  collapsed?: boolean;
  onCollapse?: (collapsed: boolean) => {};
};

const SiderMenu: React.FC<MenuProps> = props => {
  const { theme, className, width = 208 } = props;
  return (
    <Sider collapsible width={width} theme={theme} className={className}>
      <Menu mode="inline">
        <Menu.Item>
          <NavLink to={'/home'}>Home</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to={'/about'}>About</NavLink>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SiderMenu;
