import AuthButton from "@/common/Button";
import {Button, Layout, Menu} from "antd";
import {useState} from "react";
import LoginModal from "../LoginModal/LoginModal";
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
    const [openModal, setOpenModal] = useState(false);
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
                    {/* <ul className="flex flex-row justify-center items-center gap-4 text-white text-lg ">
            <li>
              <a href="#">Live</a>
            </li>
            <li>
              <a href="#">Sports Betting</a>
            </li>
            <li>
              <a href="#">Casino</a>
            </li>
            <li>
              <a href="#">Lucky Drops</a>
            </li>
            <li>
              <a href="#">Promotions</a>
            </li>
          </ul> */}
                    {/* <Anchor
            className="flex flex-row justify-center items-center"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            direction="horizontal"
            items={[
              {
                key: "part-1",
                href: "#part-1",
                title: (
                  <li className="text-white">
                    <a href="#">Live</a>
                  </li>
                ),
              },
              {
                key: "part-2",
                href: "#part-2",
                title: (
                  <li className="text-white">
                    <a href="#">Live</a>
                  </li>
                ),
              },
              {
                key: "part-3",
                href: "#part-3",
                title: (
                  <li className="text-white">
                    <a href="#">Live</a>
                  </li>
                ),
              },
              {
                key: "part-4",
                href: "#part-4",
                title: (
                  <li className="text-white">
                    <a href="#">Live</a>
                  </li>
                ),
              },
              {
                key: "part-5",
                href: "#part-5",
                title: (
                  <li className="text-white">
                    <a href="#">Live</a>
                  </li>
                ),
              },
              {
                key: "part-6",
                href: "#part-6",
                title: (
                  <li className="text-white">
                    <a href="#">Live</a>
                  </li>
                ),
              },
            ]}
          /> */}
                </div>

                <div className="flex flex-row w-1/3 gap-4 justify-end items-center">
                    <Button ghost>Language</Button>
                    <AuthButton
                        type="login"
                        onClick={() => {
                            setOpenModal(true);
                        }}
                    >
                        Login
                    </AuthButton>
                    <AuthButton type="logout">Logout</AuthButton>
                    <LoginModal open={openModal} setOpen={setOpenModal} />
                </div>
            </div>
        </Layout.Header>
    );
};

export default Header;
