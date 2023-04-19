import { betSlipReducer } from "@/features/betSlip/betSlip.reducer";
import { detailMatchReducer } from "@/features/detail/detail.reducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    detailMatch: detailMatchReducer,
    betSlip: betSlipReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
