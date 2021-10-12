<template>
  <h1>{{ pokemonData.id }}</h1>
  <h1>{{ pokemonData.name }}</h1>
  <img :src="pokemonFront" />
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";
import { PokemonResult, PokemonDataTypes } from "@/entities/index";
import { getPokemon } from "@/services/pokemon";

interface DataType {
  // TODO: specify type definition
  pokemonData: any;
}

export default defineComponent({
  name: "Pokemon",
  components: {},
  data(): DataType {
    return {
      pokemonData: {
        id: 0,
        name: "",
        sprites: {
          front_default: "",
        },
        types: [
          {
            slot: 0,
            type: {
              name: "",
              url: "",
            },
          },
        ],
      },
    };
  },
  computed: {
    pokemonFront(): string {
      return this.pokemonData.sprites.front_default;
    },
    pokemonTypes(): PokemonDataTypes[] {
      if (!this.pokemonData.types) {
        return [];
      }
      return this.pokemonData.types;
    },
    isMultipleTypes() {
      return this.pokemonTypes.length > 1;
    },
    pokemonTypeName(): string {
      return this.pokemonData.types
        ? this.pokemonData.types[0].type.name
        : "water";
    },
  },
  methods: {},
  async created() {
    this.pokemonData = await getPokemon(this.$route.params.name as string);
  },
});
</script>
