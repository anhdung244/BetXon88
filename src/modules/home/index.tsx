import {Layout} from "antd";
import MatchSlider from "./components/MatchSlider";
import NextMatch from "./components/NextMatch";
import "./style.scss";

const Home = () => {
  return (
    <Layout.Content className="">
      <MatchSlider></MatchSlider>
      <NextMatch></NextMatch>
    </Layout.Content>
  );
};

export default Home;
