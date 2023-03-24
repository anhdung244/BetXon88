import ListItem from "@/common/ListItem/ListItem";
import {Tabs, TabsProps} from "antd";
import MenuSidebar from "./Menu/MenuSidebar";
import PopularEvent from "./PopularEvent/PopularEvent";
import "./style.scss";

function Sidebar() {
    const items: TabsProps["items"] = [
        {
            key: "live",
            label: "Live",
            children: <MenuSidebar />,
        },
        {
            key: "prematch",
            label: "Prematch",
            children: <MenuSidebar />,
        },
    ];

    return (
        <div>
            <div className="event-section">
                <PopularEvent />
            </div>
            <div className="favorite-section">
                <ListItem
                    iconSource="https://pixner.net/sportsodds/sportsbet/assets/img/leftmenu/start.png"
                    name="Favorite"
                />
            </div>
            <div className="tab-sidebar-section">
                <Tabs
                    items={items}
                    tabBarStyle={{
                        justifyContent: "space-between",
                        color: "white",
                        width: "100%",
                        borderBottom: "1px solid #8a92ab",
                        padding: "0 12px",
                        fontWeight: "600",
                    }}
                    tabBarGutter={30}
                />
            </div>
        </div>
    );
}

export default Sidebar;
