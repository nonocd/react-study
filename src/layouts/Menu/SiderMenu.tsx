import { Layout } from 'antd';
import BaseMenu, { BaseMenuProps } from './BaseMenu';

const { Sider } = Layout;

export type SiderMenuProps = Omit<BaseMenuProps, 'model'> & {
  className?: string;
  width?: number;
  collapsed?: boolean;
  onCollapse?: (collapsed: boolean) => {};
};

const SiderMenu: React.FC<SiderMenuProps> = props => {
  const { theme, className, width = 208, menuData } = props;
  return (
    <Sider collapsible width={width} theme={theme} className={className}>
      <BaseMenu menuData={menuData} />
    </Sider>
  );
};

export default SiderMenu;
