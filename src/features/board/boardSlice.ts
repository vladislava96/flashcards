import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../../app/store";

interface boardState {
  openSetID: number
}

const initialState: boardState = { openSetID: -1 };

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    openSet: (state, action: PayloadAction<number>) => {
      state.openSetID = action.payload
    }
  }
})

export const { openSet } = boardSlice.actions;

export const selectBoard = (state: RootState) => state.board.openSetID;

export default boardSlice.reducer;