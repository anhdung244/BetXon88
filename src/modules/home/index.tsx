import { Layout } from "antd";
import MatchSlider from "./components/MatchSlider";
import NextMatch from "./components/NextMatch";
import "./style.scss";

const Home = () => {
  return (
    <>
      <MatchSlider></MatchSlider>
      <NextMatch></NextMatch>
    </>
  );
};

export default Home;
