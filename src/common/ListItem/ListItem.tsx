import {Row} from "antd";
import "../Button";
import "../ListItem/styles.scss";
const ListItem = (props: any) => {
    const {iconSource, name} = props;
    return (
        <Row className="flex event">
            <div>
                <img src={iconSource} className="event-icon" />
            </div>
            <div className="event-name">{name}</div>
        </Row>
    );
};

export default ListItem;
