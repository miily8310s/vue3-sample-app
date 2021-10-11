import { createStore } from "vuex";
import { Pokemons } from "@/entities";
import { getPokemons } from "@/services/pokemon";

interface State {
  pokemons: Partial<Pokemons>;
}

export default createStore({
  state: {
    pokemons: {},
  },
  getters: {
    getPokemons(state: State) {
      if (!state.pokemons.results) {
        return [];
      }
      return state.pokemons.results;
    },
  },
  mutations: {
    setPokemon(state: State, pokemons: Pokemons) {
      state.pokemons = pokemons;
    },
  },
  actions: {
    async fetchPokemons({ commit }) {
      const pokemons = await getPokemons();
      commit("setPokemon", pokemons);
    },
  },
  modules: {},
});
