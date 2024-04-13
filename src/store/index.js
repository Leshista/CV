import { configureStore } from '@reduxjs/toolkit';

import langReducer from './lang';

const store = configureStore({
    reducer: {
        lang: langReducer,
    },
});

export default store;
