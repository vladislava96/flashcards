import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface setCreationFormState {
  activityCreationForm: boolean
}

const initialState = {
  activityCreationForm: false
}

const setCreationFormSlice = createSlice({
  name: "setCreationForm",
  initialState,
  reducers: {
    activeCreationForm: (state, action: PayloadAction<boolean>) => {
      state.activityCreationForm = action.payload
    }
  }
})

export const { activeCreationForm } = setCreationFormSlice.actions;

export const selectSetCreationForm = (state: RootState) => state.setCreationForm;

export default setCreationFormSlice.reducer;