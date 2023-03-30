import PointBox from "@/common/PointBox";
import MatchInfo from "../MatchInfo";
import MatchTab from "../MatchTab";
import "./style.scss";
const NextMatch = () => {
  return (
    <div className="next-match">
      <div className="title">
        <h4>Next Match</h4>
      </div>
      <MatchTab></MatchTab>
      <PointBox point={1} result={2.95}></PointBox>
      <MatchInfo></MatchInfo>
    </div>
  );
};

export default NextMatch;
