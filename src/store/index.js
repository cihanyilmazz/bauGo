import Vue from 'vue';
import Vuex from 'vuex';
import { DefaultState } from '@/store/state';
import { Mutations } from '@/store/mutations';
import { Getters } from '@/store/getters';
import { Actions } from '@/store/actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: DefaultState,
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
});
