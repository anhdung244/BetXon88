export const initialBetOptionState = {
  increment: 0,
  teamSelected: "",
  team1: "",
  team2: "",
  point: "",
  result: 2.0,
  money: 1,
};

export type TBetSlipOption = typeof initialBetOptionState;

export type TBetSlip = TBetSlipOption[];
