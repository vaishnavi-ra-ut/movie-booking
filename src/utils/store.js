import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './locationSlice'; // Import the reducer from locationSlice.js

const store = configureStore({
    reducer: {
        location: locationReducer, // Add the location reducer to the store
    },
});

export default store;
