import { createReducer } from "@reduxjs/toolkit";
import { createBetOption, increment } from "./detail.actions";
import { initialBetOptionState } from "./detail.type";

const initialBetSelectState = initialBetOptionState;

const initialData = {};

export const detailMatchReducer = createReducer(
  initialBetSelectState,
  (builder) => {
    builder.addCase(increment, (state) => {
      state.increment++;
    });
    builder.addCase(createBetOption, (state, { payload }) => {
      state.increment++;
    });
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
  }
);
