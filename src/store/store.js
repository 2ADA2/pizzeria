import { configureStore } from '@reduxjs/toolkit';
import manageReducer from './slice';

export const store = configureStore({
    reducer: {
        manageSlice:manageReducer
    },
});