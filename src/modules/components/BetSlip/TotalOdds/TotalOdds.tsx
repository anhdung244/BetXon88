import {Button, Col, Row} from "antd";
import React from "react";
import AuthButton from "@/common/Button";
import "./styles.scss";
function TotalOdds() {
    return (
        <div className="total-odds-container px-8 pb-8">
            <Row justify="space-between" className="w-full pb-2">
                <div className="text-white ml-7 font-bold">Total Odds</div>
                <div className="text-white mr-10 font-bold">25</div>
            </Row>
            <div className="w-full px-4 py-2 bg-white rounded-lg">
                <div className="opacity-40">Stack amount, $</div>
                <div className="ml-5 opacity-40">0.00 $</div>
            </div>
            <div className="mt-4 flex w-full justify-between items-center">
                <div className="rounded-lg w-[20%] text-white bg-[#262E44] px-5 py-2  text-center">
                    5
                </div>
                <div className="rounded-lg w-[20%] text-white bg-[#262E44] px-5 py-2  text-center">
                    10
                </div>
                <div className="rounded-lg w-[20%] text-white bg-[#262E44] px-5 py-2 text-center">
                    50
                </div>
            </div>
            <div className="mt-4">
                <AuthButton type="sign-up" className="w-full">
                    <div>Sign In & Bet</div>
                </AuthButton>
            </div>
        </div>
    );
}

export default TotalOdds;
