import AuthButton from "@/common/Button";
import { Button, Layout, Menu } from "antd";
import * as React from "react";
import "./style.scss";

const NavLink: React.FC = () => {
  return (
    <Menu
      mode="horizontal"
      className="menu"
      style={{
        minWidth: 500,
        // maxWidth: 600,
        flex: "auto",
      }}
    >
      <Menu.Item key="home">
        <a href="#">Home</a>
      </Menu.Item>
      <Menu.Item key="sportBetting">
        <a href="#">Sports Betting</a>
      </Menu.Item>
      <Menu.Item key="casino">
        <a href="">Casino</a>
      </Menu.Item>
      <Menu.Item key="luckyDrops">
        <a href="">Lucky Drops</a>
      </Menu.Item>
      <Menu.Item key="liveCasino">
        <a href="">Live Casino</a>
      </Menu.Item>
      <Menu.Item key="promotions">
        <a href="">Promotions</a>
      </Menu.Item>
    </Menu>
  );
};

export const Header: React.FC = () => {
  return (
    <Layout.Header className="bg-[#202a39]">
      <div
        className="w-full px-4 h-full mx-auto flex flex-wrap 
				items-center justify-between drop-shadow-md"
      >
        <div className="w-2/3 h-full flex flex-row gap-10">
          <div className="flex justify-center items-center">
            <a href="#" className="">
              <img src="/images/logo.png" alt="" />
            </a>
          </div>
          <NavLink></NavLink>
        </div>

        <div className="flex flex-row w-1/3 gap-4 justify-end items-center">
          <Button ghost>Language</Button>
          <AuthButton type="login">Login</AuthButton>
          <AuthButton type="logout">Logout</AuthButton>
        </div>
      </div>
    </Layout.Header>
  );
};

export default Header;
