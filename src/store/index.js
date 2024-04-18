import { configureStore } from '@reduxjs/toolkit';

import langReducer from './lang';
import hiddenReducer from './hiddenProject';

const store = configureStore({
    reducer: {
        lang: langReducer,
        hiddenProject: hiddenReducer,
    },
});

export default store;
