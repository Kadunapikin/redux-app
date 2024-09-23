// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './CounterSliceounterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
