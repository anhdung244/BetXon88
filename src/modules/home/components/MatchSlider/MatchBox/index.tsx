import Football from "@/icons/Football";
import "./style.scss";

const MatchBox = () => {
  return (
    <div className="match-box">
      <div className="match-head">
        <div className="match-head-left">
          <Football></Football>
          <span>World Cup 2022</span>
        </div>
        <span className="today">Today / 22:00</span>
      </div>
      <div className="match-vs">
        <div className="match-vs-left">
          <span>Argentina</span>
          <span className="flag">
            <img src="/images/argentina.png" alt="" />
          </span>
        </div>
        <span className="vs">VS</span>
        <div className="match-vs-right">
          <span className="flag">
            <img src="/images/france.png" alt="" />
          </span>
          <span>France</span>
        </div>
      </div>
      <div className="match-result">
        <span className="match-border"></span>
        <span className="result">Match Result</span>
      </div>
      <ul className="match-point">
        <li>
          <span>1</span>
          <span>0.85</span>
        </li>
        <li>
          <span>X</span>
          <span>0.85</span>
        </li>
        <li>
          <span>1</span>
          <span>0.85</span>
        </li>
      </ul>
    </div>
  );
};

export default MatchBox;
