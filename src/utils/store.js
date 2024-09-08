import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './locationSlice'; // Import the reducer from locationSlice.js
import imageReducer from './imageSlice';
import userReducer from './userSlice'
const store = configureStore({
    reducer: {
        location: locationReducer,
        image: imageReducer,
        user: userReducer,
    },
});

export default store;
