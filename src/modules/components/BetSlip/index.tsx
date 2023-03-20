import React from "react";
import {Col, Row, Tabs, TabsProps} from "antd";
import Match from "./Match/Match";
import "./style.scss";
import TotalOdds from "./TotalOdds/TotalOdds";

const BetSlip: React.FC = () => {
    const mockData = [
        {
            player1: "Real Kashmir",
            player2: "Trau FC",
            ratio: 50.2,
            result: {
                winner: "Trau FC",
                point: "1-2",
            },
        },
        {
            player1: "Stodder, Timo",
            player2: " Kopriva, Vit",
            ratio: 3.66,
            result: {
                winner: "Stodder, Timo",
                point: null,
            },
        },
    ];

    const items: TabsProps["items"] = [
        {
            key: "1",
            label: `Single`,
            children: <Match data={mockData} />,
        },
        {
            key: "2",
            label: `Multiple`,
            children: <Match data={mockData} />,
        },
        {
            key: "3",
            label: `System`,
            children: <Match data={mockData} />,
        },
    ];

    const handleChange = (key: string) => {
        console.log(key);
    };

    return (
        <Col className="border">
            <Row className="font-bold text-xl py-3 pl-3 bg-[#636B82] text-white">
                BetSlip
            </Row>
            <div className="tabs-section">
                <Tabs
                    items={items}
                    onChange={handleChange}
                    tabBarGutter={120}
                    tabBarStyle={{
                        justifyContent: "space-between",
                        color: "white",
                        width: "100%",
                        borderBottom: "1px solid #8a92ab",
                        padding: "0 12px",
                    }}
                />
            </div>
            <TotalOdds />
        </Col>
    );
};

export default BetSlip;
