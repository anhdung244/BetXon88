// export type TBoxBatch = {
//   team1: string;
//   team2: string;
//   point: string;
//   result1: number;
//   result2: number;
// };

export type TBoxSelect = {
    teamSelected: string;
    team1: string;
    team2: string;
    point: string;
    result: number;
    id: string;
};
export const initialBetOptionState = {
    teamSelected: "",
    team1: "",
    team2: "",
    point: "",
    result: 2.0,
    money: 1,
};

export type BetSelectOption = {
    id: string;
} & TBoxSelect;
export type TinitialBetSlipData = {
    data: BetSelectOption[];
    totalBetMoney: number;
};

export type TBetSlipOption = typeof initialBetOptionState;
