import {createAction} from "@reduxjs/toolkit";
import {TBetSlipOption, TBoxSelect} from "./betSlip.type";

export const increment = createAction<number>("increment");

//====== BET OPTION =====
export const deleteBetOption = createAction<TBetSlipOption>(
    "detail/betSlip/delete"
);
export const updateBetOption = createAction<TBetSlipOption>(
    "detail/betSlip/update"
);
export const createBetOption = createAction<TBoxSelect>("detail/betSlip/add");
