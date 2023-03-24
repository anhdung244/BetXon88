import {Menu} from "antd";
import item from "./MenuItem";
import styles from "../style.module.scss";

function MenuSidebar() {
    return <Menu items={item} mode="inline" className="menu-sidebar" />;
}

export default MenuSidebar;
