import { Carousel } from "antd";
import MatchBox from "./MatchBox";
import "./style.scss";

const responsive = [
  {
    breakpoint: 1200,
    settings: {
      autoplay: true,
      infinite: true,
      draggable: true,
      slidesToShow: 2,
      slidesToScroll: 2,
    },
  },
  {
    breakpoint: 1400,
    settings: {
      autoplay: true,
      infinite: true,
      draggable: true,
      slidesToShow: 3,
      slidesToScroll: 2,
    },
  },
  {
    breakpoint: 1980,
    settings: {
      autoplay: true,
      infinite: true,
      draggable: true,
      slidesToShow: 4,
      slidesToScroll: 2,
    },
  },
  {
    breakpoint: 2300,
    settings: {
      autoplay: true,
      infinite: true,
      draggable: true,
      slidesToShow: 5,
      slidesToScroll: 2,
    },
  },
  {
    breakpoint: 2400,
    settings: {
      autoplay: true,
      infinite: true,
      draggable: true,
      slidesToShow: 6,
      slidesToScroll: 2,
    },
  },
  {
    breakpoint: 2500,
    settings: {
      autoplay: true,
      infinite: true,
      draggable: true,
      slidesToShow: 6,
      slidesToScroll: 2,
    },
  },
  {
    breakpoint: 2800,
    settings: {
      autoplay: true,
      infinite: true,
      draggable: true,
      slidesToShow: 6,
      slidesToScroll: 2,
    },
  },
];

const MatchSlider = () => {
  return (
    <div className="match-slider">
      <Carousel responsive={responsive}>
        <MatchBox></MatchBox>
        <MatchBox></MatchBox>
        <MatchBox></MatchBox>
        <MatchBox></MatchBox>
        <MatchBox></MatchBox>
        <MatchBox></MatchBox>
        <MatchBox></MatchBox>
        <MatchBox></MatchBox>
        <MatchBox></MatchBox>
        <MatchBox></MatchBox>
        <MatchBox></MatchBox>
        <MatchBox></MatchBox>
        <MatchBox></MatchBox>
        <MatchBox></MatchBox>
        <MatchBox></MatchBox>
      </Carousel>
    </div>
  );
};

export default MatchSlider;
