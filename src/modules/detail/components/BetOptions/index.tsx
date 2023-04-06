import { Tabs, TabsProps } from "antd";
import BetDetails from "../BetDetails";
import "./style.scss";

const items: TabsProps["items"] = [
  {
    label: "POPULAR",
    key: "popular",
    children: <BetDetails typeBet="POPULAR"></BetDetails>,
  },
  {
    label: "BET CUSTOM",
    key: "betCustom",
    children: <></>,
  },

  {
    label: "UP / DOWN",
    key: "upDown",
    children: <BetDetails typeBet="UPDOWN"></BetDetails>,
  },
  {
    label: "GOALS",
    key: "goals",
    children: <BetDetails typeBet="POPULAR"></BetDetails>,
  },
  {
    label: "CORNERS",
    key: "corners",
    children: <BetDetails typeBet="POPULAR"></BetDetails>,
  },
];

const BetOptions = () => {
  return (
    <div className="bet-option">
      <Tabs type="card" defaultActiveKey="1" items={items}></Tabs>
    </div>
  );
};

export default BetOptions;
