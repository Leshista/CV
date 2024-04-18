import { createSlice } from '@reduxjs/toolkit';

const hiddenProjectSlice = createSlice({
    name: 'hiddenProject',
    initialState: { isVisible: false },
    reducers: {
        toggleHiddenProject(state) {
            state.isVisible = !state.isVisible;
        },
    },
});

export const hiddenProjectActions = hiddenProjectSlice.actions;
export default hiddenProjectSlice.reducer;
