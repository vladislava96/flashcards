import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cardsListReducer from '../features/cardsList/cardsListSlice';
import editFormReducer from '../features/card-edit-form/cardEditFormSlice';
import setsListReducer from '../features/setsList/setsListSlice';
import boardReducer from '../features/board/boardSlice';
import setEditFormReducer from '../features/set-edit-form/setEditFormSlice';

export const store = configureStore({
  reducer: {
    cardsList: cardsListReducer,
    setsList: setsListReducer,
    editForm: editFormReducer,
    board: boardReducer,
    setEditForm: setEditFormReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
