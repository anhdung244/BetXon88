import Basketball from "@/icons/Basketball";
import Football from "@/icons/Football";
import Tennis from "@/icons/Tennis";
import Volleyball from "@/icons/Volleyball";
import {MenuProps} from "antd";
import {matchData} from "../../../../MockData/matchData";
import MatchMenu from "./MatchMenu/MatchMenu";

const item: MenuProps["items"] = [
    {
        label: "Soccer",
        key: "soccer",
        icon: <Football />,
        children: [
            {
                type: "option1",
                label: <MatchMenu matchData={matchData} />,
                key: "1",
            },
            {
                type: "option",
                label: <MatchMenu matchData={matchData} />,
                key: "2",
            },
        ],
    },
    {
        label: "Tennis",
        key: "tennis",
        icon: <Tennis />,
        children: [
            {
                type: "option",
                label: <MatchMenu matchData={matchData} />,
                key: "3",
            },
            {
                type: "option",
                label: <MatchMenu matchData={matchData} />,
                key: "4",
            },
        ],
    },
    {
        label: "Basketball",
        key: "basketball",
        icon: <Basketball />,
        children: [
            {
                type: "option",
                label: <MatchMenu matchData={matchData} />,
                key: "5",
            },
            {
                type: "option",
                label: <MatchMenu matchData={matchData} />,
                key: "6",
            },
        ],
    },
    {
        label: "Volleyball",
        key: "volleyball",
        icon: <Volleyball />,
        children: [
            {
                type: "option",
                label: <MatchMenu matchData={matchData} />,
                key: "7",
            },
            {
                type: "option",
                label: <MatchMenu matchData={matchData} />,
                key: "8",
            },
        ],
    },
];

export default item;
