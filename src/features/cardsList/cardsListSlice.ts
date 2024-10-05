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
  initialState: cardsAdapter.getInitialState({
    lastID: -1
  }),
  reducers: {
    addCard: (state, action) => {
      let card = action.payload;
      state.lastID++;
      card.id = state.lastID;
      cardsAdapter.addOne(state, card)
    },
    deleteCard: cardsAdapter.removeOne,
    editCard: cardsAdapter.updateOne,
    deleteCardsInSet: cardsAdapter.removeMany
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

export const idCardsInSet = (idSetDelete: number) => (state: RootState) => {
  return cardsInSet(idSetDelete)(state).map((card) => card.id);
}

export const {addCard, deleteCard, editCard, deleteCardsInSet} = cardsListSlice.actions;

export default cardsListSlice.reducer;