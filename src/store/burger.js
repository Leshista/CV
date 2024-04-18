import { createSlice } from '@reduxjs/toolkit';

const burgerSlice = createSlice({
    name: 'burger',
    initialState: { isVisible: false },
    reducers: {
        toggleBurgerVisibility(state) {
            state.isVisible = !state.isVisible;
        },
    },
});

export const burgerActions = burgerSlice.actions;
export default burgerSlice.reducer;
