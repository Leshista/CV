import { createSlice } from '@reduxjs/toolkit';

const hiddenProjectSlice = createSlice({
    name: 'hiddenProject',
    initialState: { hidden: true },
    reducers: {
        toggleHiddenProject(state) {
            state.hidden = !state.hidden;
        },
    },
});

export const hiddenProjectActions = hiddenProjectSlice.actions;
export default hiddenProjectSlice.reducer;
