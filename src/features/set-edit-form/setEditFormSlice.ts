import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface setEditFormState {
  id: number,
  name: string
}

const initialState: setEditFormState = {
  id: -1,
  name: ''
}

const setEditFormSlice = createSlice({
  name: "setEditForm",
  initialState,
  reducers: {
    editForm: (state, action: PayloadAction<setEditFormState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name
    }
  }
})

export const { editForm } = setEditFormSlice.actions;

export const selectForm = (state: RootState) => state.setEditForm;

export default setEditFormSlice.reducer;