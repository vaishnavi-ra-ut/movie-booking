import { createSlice } from "@reduxjs/toolkit";
const imageSlice = createSlice({
    name: 'image',
    initialState: {
        images: [],
    },
    reducers: {
        addImage: (state, action) => {
            state.images.push(action.payload);
        },
    },
});

export const { addImage } = imageSlice.actions;
export default imageSlice.reducer;
