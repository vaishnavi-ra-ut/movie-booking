import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './locationSlice'; // Import the reducer from locationSlice.js
import imageReducer from './imageSlice';
const store = configureStore({
    reducer: {
        location: locationReducer,
        image: imageReducer,
    },
});

export default store;
