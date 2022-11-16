import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import todoReducer from "./Reducers/TodoReducer";


export const store = configureStore({
  reducer: {
     todoState: todoReducer
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
