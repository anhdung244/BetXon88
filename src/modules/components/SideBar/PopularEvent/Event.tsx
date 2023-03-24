import {Row} from "antd";
import "../style.scss";

function Event() {
    return (
        <Row className="flex event">
            <div>
                <img
                    src="https://pixner.net/sportsodds/sportsbet/assets/img/leftmenu/cup.png"
                    className="event-icon"
                />
            </div>
            <div className="event-name">World Cup 2022</div>
        </Row>
    );
}

export default Event;
