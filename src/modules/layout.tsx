import {Layout} from "antd";
import {Content, Footer} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import {Outlet} from "react-router-dom";
import BetSlip from "./components/BetSlip";
import Header from "./components/Header";
import MainTab from "./components/MainTab";
import Sidebar from "./components/SideBar";
import FooterComp from "./components/Footer";

function RootLayout() {
    return (
        <Layout className="min-h-screen">
            <Header />
            <MainTab />
            <Layout>
                <Sider width={300}>
                    <Sidebar />
                </Sider>
                <Content>
                    <Outlet />
                </Content>
                <Sider width={400}>
                    <BetSlip />
                </Sider>
            </Layout>
            <Footer>
                <FooterComp />
            </Footer>
        </Layout>
    );
}

export default RootLayout;
