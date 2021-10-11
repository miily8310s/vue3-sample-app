<template>
  <h1>{{ pokemon.name }}</h1>
  <p>{{ pokemon.url }}</p>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { PokemonResult } from "@/entities/index";

export default defineComponent({
  name: "Pokemon",
  components: {},
  props: {
    pokemon: {
      type: Object as PropType<PokemonResult>,
      required: true,
    },
  },
  setup() {
    // const store = useStore();
    // const data: DataType = reactive({ initilize: false });
    // const pokemons = computed(() => {
    //   return store.getters.getPokemons;
    // });
    // onMounted(() => {
    //   store.dispatch("fetchPokemons");
    //   data.initilize = true;
    // });
    // return {
    //   data,
    //   // message,
    //   pokemons,
    // };
  },
});
</script>
