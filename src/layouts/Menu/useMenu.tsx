import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { MenuDataItem } from '@/types/menu';

const useMenu = () => {
  const renderMenuTitleContent = (item: MenuDataItem) => {
    return <NavLink to={item.path as string}>{item.name}</NavLink>;
  };

  const renderMenuItem = (item: MenuDataItem) => {
    return (
      <Menu.Item key={item.path} disabled={item.meta?.disabled} danger={item.meta?.danger}>
        {renderMenuTitleContent(item)}
      </Menu.Item>
    );
  };

  const renderSubMenuOrItem = (item: MenuDataItem) => {
    if (Array.isArray(item.children) && item.children.length > 0) {
      return (
        <Menu.SubMenu key={item.path} disabled={item.meta?.disabled} title={item.meta?.title}>
          {getNavMenuItems(item.children)}
        </Menu.SubMenu>
      );
    }

    return renderMenuItem(item);
  };

  const getNavMenuItems = (menusData: MenuDataItem[] = []) => {
    return menusData.map(item => renderSubMenuOrItem(item));
  };

  return {
    getNavMenuItems,
  };
};
export default useMenu;
