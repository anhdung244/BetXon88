import ListItem from "@/common/ListItem/ListItem";
import {Col} from "antd";

function PopularEvent() {
    return (
        <Col>
            <div className="popular-events-title">Popular Events</div>
            <ListItem
                iconSource="https://pixner.net/sportsodds/sportsbet/assets/img/leftmenu/cup.png"
                name="World Cup 2022"
            />
            <ListItem
                iconSource="https://pixner.net/sportsodds/sportsbet/assets/img/leftmenu/cup.png"
                name="World Cup 2022"
            />
            <ListItem
                iconSource="https://pixner.net/sportsodds/sportsbet/assets/img/leftmenu/cup.png"
                name="World Cup 2022"
            />
            <ListItem
                iconSource="https://pixner.net/sportsodds/sportsbet/assets/img/leftmenu/cup.png"
                name="World Cup 2022"
            />
        </Col>
    );
}

export default PopularEvent;
