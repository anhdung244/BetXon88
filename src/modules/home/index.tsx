import {Layout} from "antd";
import MatchSlider from "./components/MatchSlider";
import TrendingCard from "./components/TrendingCard";

const Home = () => {
  return (
    <Layout.Content>
      <MatchSlider></MatchSlider>
      <TrendingCard></TrendingCard>
    </Layout.Content>
  );
};

export default Home;
