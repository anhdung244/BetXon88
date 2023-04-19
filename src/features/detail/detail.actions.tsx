import { createAction } from "@reduxjs/toolkit";
import { TBetSlipOption } from "./detail.type";

export const increment = createAction<number>("increment");

//====== BET OPTION =====
export const createBetOption =
  createAction<TBetSlipOption>("detail/betSlip/add");

export const deleteBetOption = createAction<TBetSlipOption>(
  "detail/betSlip/delete"
);
export const updateBetOption = createAction<TBetSlipOption>(
  "detail/betSlip/update"
);
