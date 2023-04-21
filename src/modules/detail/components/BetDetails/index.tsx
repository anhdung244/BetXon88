import {Collapse, Space} from "antd";
import BoxResult from "./BoxResult";
import "./style.scss";
import {useAppDispatch} from "@/app/hooks";
import {TBoxSelect} from "@/features/betSlip/betSlip.type";
import {createBetOption} from "@/features/betSlip/betSlip.actions";
import {v4 as uuidv4} from "uuid";

//====== BET DEFAULT
const BoxBatch: React.FC = () => {
    const result = [
        {
            team1: "Manchester United",
            team2: "Chelsea",
            point: "0.5",
            result1: 0.4,
            result2: 0.9,
        },
        {
            team1: "Manchester City",
            team2: "Asernal",
            point: "0.5",
            result1: 1.06,
            result2: 2.01,
        },
        {
            team1: "Manchester City",
            team2: "Asernal",
            point: "2",
            result1: 0.4,
            result2: 1.4,
        },
        {
            team1: "Manchester City",
            team2: "Liverpool",
            point: "0.5/1",
            result1: 0.4,
            result2: 0.9,
        },
    ];

    const dispatch = useAppDispatch();
    const handleSelectOption = (data: TBoxSelect) => {
        dispatch(createBetOption(data));
    };
    return (
        <>
            {result.map((i, index) => {
                const optionTeam1 = {
                    id: uuidv4(),
                    teamSelected: i.team1,
                    team1: i.team1,
                    team2: i.team2,
                    point: `+ ${i.point}`,
                    result: i.result1,
                };

                const optionTeam2 = {
                    id: uuidv4(),
                    teamSelected: i.team2,
                    team1: i.team1,
                    team2: i.team2,
                    point: `- ${i.point}`,
                    result: i.result1,
                };
                return (
                    <div className="box-batch" key={index}>
                        <BoxResult
                            team={i.team1}
                            point={`+ ${i.point}`}
                            result={i.result1}
                            handleSelectOption={() =>
                                handleSelectOption(optionTeam1)
                            }
                        ></BoxResult>
                        <BoxResult
                            team={i.team2}
                            point={`- ${i.point}`}
                            result={i.result2}
                            handleSelectOption={() =>
                                handleSelectOption(optionTeam2)
                            }
                        ></BoxResult>
                    </div>
                );
            })}
        </>
    );
};

//====== BET UP/DOWN

const BetUpDown: React.FC = () => {
    const upDown = [
        {
            point: "0.5",
            result1: 0.4,
            result2: 0.9,
        },
        {
            point: "0.5",
            result1: 0.4,
            result2: 0.9,
        },
        {
            point: "2",
            result1: 0.4,
            result2: 0.9,
        },
        {
            point: "0.5/1",
            result1: 0.4,
            result2: 0.9,
        },
    ];
    const handleSelectOption = () => {};
    return (
        <>
            {upDown.map((i) => (
                <div className="box-batch">
                    <BoxResult
                        point={`Up ${i.point}`}
                        result={i.result1}
                        handleSelectOption={() => handleSelectOption()}
                    ></BoxResult>
                    <BoxResult
                        point={`Down ${i.point}`}
                        result={i.result2}
                        handleSelectOption={() => handleSelectOption()}
                    ></BoxResult>
                </div>
            ))}
        </>
    );
};

type TBetDetails = {typeBet: string};
const BetDetails = ({typeBet}: TBetDetails) => {
    const {Panel} = Collapse;

    return (
        <div className="bet-details">
            {typeBet === "POPULAR" && (
                <Space
                    direction="vertical"
                    size="middle"
                    style={{display: "flex"}}
                >
                    <Collapse collapsible="header" defaultActiveKey={["1"]}>
                        <Panel header={<h1>CƯỢC CHẤP</h1>} key="1">
                            <BoxBatch></BoxBatch>
                        </Panel>
                    </Collapse>
                    <Collapse collapsible="header" defaultActiveKey={["1"]}>
                        <Panel header={<h1>CƯỢC CHẤP ( Hiệp 1)</h1>} key="1">
                            <BoxBatch></BoxBatch>
                        </Panel>
                    </Collapse>
                    <Collapse collapsible="header" defaultActiveKey={["1"]}>
                        <Panel header={<h1>CƯỢC CHẤP ( Hiệp 2)</h1>} key="1">
                            <BoxBatch></BoxBatch>
                        </Panel>
                    </Collapse>
                </Space>
            )}

            {typeBet === "UPDOWN" && (
                <Space
                    direction="vertical"
                    size="middle"
                    style={{display: "flex"}}
                >
                    <Collapse collapsible="header" defaultActiveKey={["1"]}>
                        <Panel header={<h1>CƯỢC CHẤP</h1>} key="1">
                            <BetUpDown></BetUpDown>
                        </Panel>
                    </Collapse>
                </Space>
            )}
        </div>
    );
};

export default BetDetails;
