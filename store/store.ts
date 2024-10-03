import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import regionReducer from "./regionSlice";

const rootReducer = combineReducers({
  search: searchReducer,
  region: regionReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
