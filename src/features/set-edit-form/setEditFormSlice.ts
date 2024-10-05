import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface setEditFormState {
  id: number,
  name: string,
  activity: boolean
}

export interface editSetData {
  id: number,
  name: string,
} 

const initialState: setEditFormState = {
  id: -1,
  name: '',
  activity: false,
}

const setEditFormSlice = createSlice({
  name: "setEditForm",
  initialState,
  reducers: {
    editForm: (state, action: PayloadAction<editSetData>) => {
      state.id = action.payload.id;
      state.name = action.payload.name
    },
    activeEditForm: (state, action: PayloadAction<boolean>) => {
      state.activity = action.payload
    }
  }
})

export const { editForm, activeEditForm } = setEditFormSlice.actions;

export const selectForm = (state: RootState) => state.setEditForm;

export default setEditFormSlice.reducer;