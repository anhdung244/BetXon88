import Basketball from "@/icons/Basketball";
import Favorite from "@/icons/Favorite";
import Football from "@/icons/Football";
import HomeIcon from "@/icons/HomeIcon";
import Search from "@/icons/Search";
import Tennis from "@/icons/Tennis";
import { Anchor } from "antd";
import React, { ReactNode } from "react";
import "./style.scss";

export type TTabView = {
  icon: ReactNode;
  label: String;
};
const TabView = ({ icon, label }: TTabView) => {
  return (
    <>
      <span className="tab-icon">{icon}</span>
      <span>{label}</span>
    </>
  );
};

const MainTab: React.FC = () => {
  return (
    <div className="main-tab">
      <Anchor
        direction="horizontal"
        items={[
          {
            key: "home",
            href: "#home",
            title: <TabView icon={<HomeIcon />} label="Home"></TabView>,
          },
          {
            key: "part-2",
            href: "#part-2",
            title: <TabView icon={<Basketball />} label="Today"></TabView>,
          },
          {
            key: "part-3",
            href: "#part-3",
            title: <TabView icon={<Football />} label="Football"></TabView>,
          },
          {
            key: "part-4",
            href: "#part-4",
            title: <TabView icon={<Basketball />} label="Basketball"></TabView>,
          },
          {
            key: "part-5",
            href: "#part-5",
            title: <TabView icon={<Tennis />} label="Tennis"></TabView>,
          },
          {
            key: "part-6",
            href: "#part-6",
            title: <TabView icon={<Basketball />} label="Volleyball"></TabView>,
          },
          {
            key: "part-7",
            href: "#part-7",
            title: <TabView icon={<Search />} label="Search"></TabView>,
          },
          {
            key: "part-8",
            href: "#part-8",
            title: <TabView icon={<Favorite />} label="Favorite"></TabView>,
          },
        ]}
      ></Anchor>
    </div>
  );
};

export default MainTab;
