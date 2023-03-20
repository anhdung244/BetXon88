import {Layout} from "antd";
import {Content, Footer} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import BetSlip from "./components/BetSlip";
import Header from "./components/Header";
import MainTab from "./components/MainTab";
import Home from "./home";

function RootLayout() {
    return (
        <Layout className="w-full h-full">
            <Header />
            <MainTab />
            <Layout>
                <Sider>Sider</Sider>
                <Home></Home>
                <Sider width={400}>
                    <BetSlip />
                </Sider>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    );
}

export default RootLayout;
