<template>
  <div class="styledGrid" v-if="data.initilize">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <div
      class="styledGridPokemon"
      v-for="(pokemon, index) in pokemons"
      :key="`${index}_${pokemon.name}`"
    >
      <Pokemon :pokemon="pokemon" />
    </div>
  </div>
  <div v-else>loading</div>
</template>

<script lang="ts">
import { computed, reactive, onMounted, defineComponent } from "vue";
import Pokemon from "@/components/Pokemon.vue";
import { useStore } from "vuex";

interface DataType {
  initilize: boolean;
}

export default defineComponent({
  name: "Home",
  components: {
    // HelloWorld,
    Pokemon,
  },
  setup() {
    const store = useStore();
    const data: DataType = reactive({ initilize: false });
    const pokemons = computed(() => {
      return store.getters.getPokemons;
    });
    onMounted(() => {
      store.dispatch("fetchPokemons");
      data.initilize = true;
    });
    return {
      data,
      pokemons,
    };
  },
});
</script>

<style lang="scss" scoped>
.styledGrid {
  display: flex;
  flex-wrap: wrap;
  margin-left: 5rem;
}
.styledGridPokemon {
  margin-right: 1.5rem;
  margin-bottom: 1.2rem;
}
</style>
