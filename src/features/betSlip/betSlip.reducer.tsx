import { createReducer } from "@reduxjs/toolkit";
import { createBetOption, deleteBetOption } from "./betSlip.actions";
import { TinitialBetSlipData } from "./betSlip.type";

const initialBetSlipData: TinitialBetSlipData = {
  data: [],
  totalBetMoney: 100,
};

export const betSlipReducer = createReducer(initialBetSlipData, (builder) => {
  builder.addCase(createBetOption, (state, { payload }) => {
    state.data = [...state.data, payload];
  });
  // builder.addCase(deleteBetOption, (state, { payload }) => {
  //   state.data = [...state.data, payload];
  // });

  // .addCase(getWordsProject.pending, (state) => {
  //   state.pending = true;
  // })
  // .addCase(getWordsProject.fulfilled, (state, { payload }) => {
  //   state.pending = false;
  //   state.wordsProjectData = payload;
  // })
  // .addCase(getWordsProject.rejected, (state) => {
  //   state.pending = false;
  //   state.error = true;
  // });
});
