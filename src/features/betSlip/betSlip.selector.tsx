import { RootState } from "@/app/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectBetSlip = (state: RootState) => state.betSlip;
export const selectCollectionSelector = createSelector(
  selectBetSlip,
  (state) => state
);
