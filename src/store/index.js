import { configureStore } from '@reduxjs/toolkit';

import langReducer from './lang';
import hiddenReducer from './hiddenProject';
import burgerReducer from './burger';

const store = configureStore({
    reducer: {
        lang: langReducer,
        hiddenProject: hiddenReducer,
        burger: burgerReducer,
    },
});

export default store;
