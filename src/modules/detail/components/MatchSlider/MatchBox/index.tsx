import Football from "@/icons/Football";
import "./style.scss";

const MatchBox = ({matchData}: any) => {
    const {comp1, comp2, day, time, event} = matchData;
    return (
        <div className="match-box">
            <div className="match-head">
                <div className="match-head-left">
                    <Football></Football>
                    <span>{event}</span>
                </div>
                <span className="today">
                    {day} / {time}
                </span>
            </div>
            <div className="match-vs">
                <div className="match-vs-left">
                    <span>{comp1}</span>
                    <span className="flag">
                        <img src="/images/argentina.png" alt="" />
                    </span>
                </div>
                <span className="vs">VS</span>
                <div className="match-vs-right">
                    <span className="flag">
                        <img src="/images/france.png" alt="" />
                    </span>
                    <span>{comp2}</span>
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
