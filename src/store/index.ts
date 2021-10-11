import { createStore } from "vuex";
import { Pokemons } from "@/entities";
import { getPokemons, getPokemon } from "@/services/pokemon";

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
    setPokemons(state: State, pokemons: Pokemons) {
      state.pokemons = pokemons;
    },
  },
  actions: {
    async fetchPokemons({ commit }) {
      const pokemons = await getPokemons();
      commit("setPokemons", pokemons);
    },
  },
  modules: {},
});
