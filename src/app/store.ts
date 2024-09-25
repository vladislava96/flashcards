import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cardsListReducer from '../features/cardsList/cardsListSlice';
import deleteCardReducer from '../features/cardsList/cardsListSlice';
import editFormReducer from '../features/card-edit-form/cardEditFormSlice';

export const store = configureStore({
  reducer: {
    cardsList: cardsListReducer,
    deleteCard: deleteCardReducer,
    editForm: editFormReducer
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
