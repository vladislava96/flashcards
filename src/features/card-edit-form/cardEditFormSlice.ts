import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardModel } from "../cardsList/cardsListSlice";
import { RootState } from "../../app/store";

const initialState: CardModel = {
  term: '',
  definition: '',
  id: -1,
  setId: -1
};

const cardEditFormSlice = createSlice({
  name: "cardEditForm",
  initialState,
  reducers: {
    editForm: (state, action: PayloadAction<CardModel>) => {
      state.term = action.payload.term;
      state.definition = action.payload.definition;
      state.id = action.payload.id
    }
  }
});

export const { editForm } = cardEditFormSlice.actions;

export const selectForm = (state: RootState) => state.editForm;

export default cardEditFormSlice.reducer