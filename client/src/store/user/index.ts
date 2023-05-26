import State from './state.ts';
import Mutation from './mutation.ts';
import Action from './action.ts';

const state = State

const mutations = Mutation;

const actions = Action;

export default {
    namespaced: true,
    state,
    mutations,
    actions
}