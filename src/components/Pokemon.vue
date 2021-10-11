<template>
  <h1>
    <span>{{ pokemonData.id }}</span> {{ pokemonData.name }}
  </h1>
  <img :src="pokemonTypes" />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { PokemonResult } from "@/entities/index";
import { getPokemon } from "@/services/pokemon";

interface DataType {
  // TODO: specify type definition
  pokemonData: any;
}

export default defineComponent({
  name: "Pokemon",
  components: {},
  props: {
    pokemon: {
      type: Object as PropType<PokemonResult>,
      required: true,
    },
  },
  data(): DataType {
    return {
      pokemonData: {},
    };
  },
  computed: {
    pokemonTypes(): string {
      return this.pokemonData.sprites
        ? this.pokemonData.sprites.front_default
        : "";
    },
  },
  async created() {
    this.pokemonData = await getPokemon(this.pokemon.name);
  },
  // TODO: setupだとテンプレートに表示できないため、一旦Options APIで対処
  // setup() {
  // },
});
</script>
