import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { CardModel } from "../cardsList/cardsListSlice";

export interface SetModel {
  id: number;
  name: string;
  cards: Array<CardModel>
};

const setsAdapter = createEntityAdapter({
  selectId: (card: SetModel) => card.id,
})

const setsListSlice = createSlice({
  name: "setsList",
  initialState: setsAdapter.getInitialState(),
  reducers: {
    addSet: setsAdapter.addOne,
    deleteSet: setsAdapter.removeOne,
    editSet: setsAdapter.updateOne
  }
});

const setsSelectors = setsAdapter.getSelectors<RootState>(
  (state) => state.setsList
)

export const allSets = setsSelectors.selectAll;

export const {addSet, deleteSet, editSet} = setsListSlice.actions;

export default setsListSlice.reducer;