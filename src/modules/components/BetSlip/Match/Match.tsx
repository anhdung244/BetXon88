import {Col, Row, Tabs} from "antd";
import React from "react";
interface Result {
    winner: string;
    point: string | null;
}

interface MatchData {
    player1: string;
    player2: string;
    ratio: number;
    result: Result;
}
const Match: React.FC<{data: MatchData[]}> = ({data}) => {
    return (
        <div className="pb-2 px-6">
            {data?.map(({player1, player2, ratio, result}, index) => (
                <div className="text-[#8a92ab] my-4 border-b border-[#8a92ab] pb-5">
                    <Row key={index} justify="space-between">
                        <Col span={12}>
                            {player1} vs {player2}
                        </Col>
                        <Col span={4} className="hover:cursor-pointer">
                            x
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="pt-2 pb-2 px-3 bg-[#262e44] rounded-lg mx-2">
                                {ratio}
                            </div>
                        </Col>
                        <Col>
                            <Row>{result.winner}</Row>
                            <Row className="text-[8px]">
                                {result.point ? result.point : "Winner"}
                            </Row>
                        </Col>
                    </Row>
                </div>
            ))}
        </div>
    );
};

export default Match;
