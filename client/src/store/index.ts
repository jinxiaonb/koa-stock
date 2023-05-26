import { createStore } from "vuex";

import user from './user/index.ts';

const store = createStore({
    state: {},
    getters: {},
    actions: {},
    mutations: {},
    modules: {
        user
    }
});

export default store;