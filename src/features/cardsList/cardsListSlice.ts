import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface CardModel {
  term: string;
  definition: string;
  id: number;
  setId: number;
};

const cardsAdapter = createEntityAdapter({
  selectId: (card: CardModel) => card.id,
})

const cardsListSlice = createSlice({
  name: "cardsList",
  initialState: cardsAdapter.getInitialState(),
  reducers: {
    addCard: cardsAdapter.addOne,
    deleteCard: cardsAdapter.removeOne,
    editCard: cardsAdapter.updateOne
  }
});

const cardsSelectors = cardsAdapter.getSelectors<RootState>(
  (state) => state.cardsList
)

export const allCards = cardsSelectors.selectAll;

export const cardsInSet = (setId: number) => (state: RootState) => {
  const cards = allCards(state);
  const result = cards.filter((card) => card.setId === setId)
  return result
}

export const {addCard, deleteCard, editCard} = cardsListSlice.actions;

export default cardsListSlice.reducer;

