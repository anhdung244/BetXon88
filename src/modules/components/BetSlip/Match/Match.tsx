import {BetSelectOption} from "@/features/betSlip/betSlip.type";
import Dot from "@/icons/Dot";
import {Col, Row, Tabs} from "antd";
import React from "react";
// interface Result {
//   winner: string;
//   point: string | null;
// }

// interface MatchData {
//   player1: string;
//   player2: string;
//   ratio: number;
//   result: Result;
// }

//    const optionTeam1 = {
//      teamSelected: i.team1,
//      team1: i.team1,
//      team2: i.team2,
//      point: `+ ${i.point}`,
//      result: i.result1,
//    };
const Match: React.FC<{data: BetSelectOption[]}> = ({data}) => {
    console.log(data);
    return (
        <div className="pb-2 px-6 ">
            {data?.map(({teamSelected, team1, team2, point, result}, index) => (
                <div className="flex flex-col gap-2 text-[#8a92ab] my-4 border-b border-[#8a92ab] pb-5">
                    <Row key={index} justify="space-between">
                        <Col
                            span={16}
                            className="flex justify-start items-center gap-2"
                        >
                            <span>
                                <Dot></Dot>
                            </span>
                            <div className="flex gap-4">
                                <span className="font-bold text-gray-300">
                                    {teamSelected}
                                </span>
                                <span className="font-bold  text-orange-500">
                                    {point}
                                </span>
                            </div>
                        </Col>
                        <Col span={2} className="hover:cursor-pointer">
                            x
                        </Col>
                    </Row>
                    <Row key={index} justify="space-between">
                        {team1} vs {team2}
                    </Row>
                    <Row align={"middle"}>
                        <Col>
                            <div className="pt-2 pb-2 px-3 bg-[#262e44] font-bold text-md rounded-lg mx-2">
                                {result}
                            </div>
                        </Col>
                        <Col>1-0</Col>
                    </Row>
                </div>
            ))}
        </div>
    );
};

export default Match;
