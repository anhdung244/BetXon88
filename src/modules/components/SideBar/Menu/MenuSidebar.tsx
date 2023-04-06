import { Menu } from "antd";
import item from "./MenuItem";

function MenuSidebar() {
  return <Menu items={item} mode="inline" className="menu-sidebar" />;
}

export default MenuSidebar;
