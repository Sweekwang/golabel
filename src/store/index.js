import { configureStore } from '@reduxjs/toolkit';
import goReducer from './goTerm';

const store = configureStore({
    reducer: { goTerm: goReducer}
});

export default store;
