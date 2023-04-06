import { Collapse, Space } from "antd";
import BoxResult from "./BoxResult";
import "./style.scss";

const BoxBatch: React.FC = () => {
  const result = [
    {
      team1: "Manchester United",
      team2: "Chelsea",
      point: "0.5",
      result1: "0.4",
      result2: "0.9",
    },
    {
      team1: "Manchester City",
      team2: "Asernal",
      point: "0.5",
      result1: "0.4",
      result2: "0.9",
    },
    {
      team1: "Manchester City",
      team2: "Asernal",
      point: "2",
      result1: "0.4",
      result2: "0.9",
    },
    {
      team1: "Manchester City",
      team2: "Liverpool",
      point: "0.5/1",
      result1: "0.4",
      result2: "0.9",
    },
  ];
  return (
    <>
      {result.map((i) => (
        <div className="box-batch">
          <BoxResult
            team={i.team1}
            point={`+ ${i.point}`}
            result={i.result1}
          ></BoxResult>
          <BoxResult
            team={i.team2}
            point={`- ${i.point}`}
            result={i.result2}
          ></BoxResult>
        </div>
      ))}
    </>
  );
};

//====== BET UP/DOWN

const BetUpDown: React.FC = () => {
  const upDown = [
    {
      point: "0.5",
      result1: "0.4",
      result2: "0.9",
    },
    {
      point: "0.5",
      result1: "0.4",
      result2: "0.9",
    },
    {
      point: "2",
      result1: "0.4",
      result2: "0.9",
    },
    {
      point: "0.5/1",
      result1: "0.4",
      result2: "0.9",
    },
  ];
  return (
    <>
      {upDown.map((i) => (
        <div className="box-batch">
          <BoxResult point={`Up ${i.point}`} result={i.result1}></BoxResult>
          <BoxResult point={`Down ${i.point}`} result={i.result2}></BoxResult>
        </div>
      ))}
    </>
  );
};

type TBetDetails = { typeBet: string };
const BetDetails = ({ typeBet }: TBetDetails) => {
  const { Panel } = Collapse;

  return (
    <div className="bet-details">
      {typeBet === "POPULAR" && (
        <Space direction="vertical" size="middle" style={{ display: "flex" }}>
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
        <Space direction="vertical" size="middle" style={{ display: "flex" }}>
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
