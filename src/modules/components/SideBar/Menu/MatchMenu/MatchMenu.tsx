import "../../style.scss";

function MatchMenu({matchData}: any) {
    const {comp1, comp2, day, time} = matchData;
    return (
        <div className="flex">
            <div className="match-comp">
                <img
                    src={`public/images/${comp1.toLowerCase()}.png`}
                    alt="argentina"
                    className="flag-comp"
                />
                <div>{comp1}</div>
            </div>
            <div className="vs-comp">
                <div className="vs">VS</div>
                <div className="time">
                    {day} / {time}
                </div>
            </div>
            <div className="match-comp">
                <img
                    src={`public/images/${comp2.toLowerCase()}.png`}
                    alt="france"
                    className="flag-comp"
                />
                <div>{comp2}</div>
            </div>
        </div>
    );
}

export default MatchMenu;
