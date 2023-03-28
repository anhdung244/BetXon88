import Basketball from "@/icons/Basketball";
import Football from "@/icons/Football";
import Tennis from "@/icons/Tennis";
import Volleyball from "@/icons/Volleyball";
import { Menu, MenuProps } from "antd";
import "./style.scss";

const items: MenuProps["items"] = [
  {
    label: "All",
    key: "All",
    icon: <></>,
  },
  {
    label: "Football",
    key: "football",
    icon: <Football></Football>,
  },

  {
    label: "Basketball",
    key: "basketball",
    icon: <Basketball></Basketball>,
  },
  {
    label: "Tennis",
    key: "tennis",
    icon: <Tennis></Tennis>,
  },
  {
    label: "Volleyball",
    key: "volleyball",
    icon: <Volleyball></Volleyball>,
  },
];

const MatchTab = () => {
  return (
    <div className="tab">
      <Menu mode="horizontal" items={items}></Menu>
    </div>
  );
};

export default MatchTab;
