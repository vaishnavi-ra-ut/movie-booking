import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentLocation: 'Bhopal', // default location
    cities: []
};

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setCurrentLocation: (state, action) => {
            state.currentLocation = action.payload;
        },
        setCities: (state, action) => {
            state.cities = action.payload;
        },
    },
});

export const { setCurrentLocation, setCities } = locationSlice.actions;
export default locationSlice.reducer;
