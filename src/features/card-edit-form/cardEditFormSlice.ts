import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardModel } from "../cardsList/cardsListSlice";
import { RootState } from "../../app/store";

export interface cardEditFormState {
  term: string,
  definition: string,
  id: number,
  setId: number,
  activityCreationForm: boolean
}

const initialState: cardEditFormState = {
  term: '',
  definition: '',
  id: -1,
  setId: -1,
  activityCreationForm: false
};

const cardEditFormSlice = createSlice({
  name: "cardEditForm",
  initialState,
  reducers: {
    editForm: (state, action: PayloadAction<CardModel>) => {
      state.term = action.payload.term;
      state.definition = action.payload.definition;
      state.id = action.payload.id
    },
    activeCreationForm: (state, action: PayloadAction<boolean>) => {
      state.activityCreationForm = action.payload
    },
  }
});

export const { editForm, activeCreationForm } = cardEditFormSlice.actions;

export const selectForm = (state: RootState) => state.editForm;

export default cardEditFormSlice.reducer