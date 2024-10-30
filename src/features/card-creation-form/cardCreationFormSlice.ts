import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface cardCreationFormState {
  activityCreationForm: boolean
}

const initialState = {
  activityCreationForm: false
}

const cardCreationFormSlice = createSlice({
  name: "setCreationForm",
  initialState,
  reducers: {
    activeCreationForm: (state, action: PayloadAction<boolean>) => {
      state.activityCreationForm = action.payload
    }
  }
})

export const { activeCreationForm } = cardCreationFormSlice.actions;

export const selectCardCreationForm = (state: RootState) => state.cardCreationForm;

export default cardCreationFormSlice.reducer;