import { createSlice } from '@reduxjs/toolkit';

const langSlice = createSlice({
    name: 'lang',
    initialState: { language: 'ru' },
    reducers: {
        toggleLangRu(state) {
            state.language = 'ru';
        },
        toggleLangEn(state) {
            state.language = 'en';
        },
    },
});

export const langActions = langSlice.actions;
export default langSlice.reducer;
