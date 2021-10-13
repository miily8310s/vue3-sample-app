<template>
  <h1 class="PokemonIdName">
    No.{{ pokemonDetailsData.id }} {{ pokemonDetailsData.name }}
  </h1>
  <img :src="pokemonFront" :alt="`${pokemonDetailsData.name}_front`" />
  <img :src="pokemonBack" :alt="`${pokemonDetailsData.name}_back`" />
  <img :src="pokemonShiny" :alt="`${pokemonDetailsData.name}_shiny`" />
  <div class="PokemonSize">
    <h1 class="PokemonSizeNumber">
      <span>height: </span>{{ pokemonDetailsData.height }}
    </h1>
    <h1 class="PokemonSizeNumber">
      <span>weight:</span> {{ pokemonDetailsData.weight }}
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { PokemonDataTypes } from "@/entities/index";
import { getPokemon } from "@/services/pokemon";

interface DataType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pokemonDetailsData: any;
}

export default defineComponent({
  name: "Pokemon",
  components: {},
  data(): DataType {
    return {
      pokemonDetailsData: {
        id: 0,
        name: "",
        sprites: {
          front_default: "",
          back_default: "",
          front_shiny: "",
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
        height: 0,
        weight: 0,
      },
    };
  },
  computed: {
    pokemonFront(): string {
      return this.pokemonDetailsData.sprites.front_default;
    },
    pokemonBack(): string {
      return this.pokemonDetailsData.sprites.back_default;
    },
    pokemonShiny(): string {
      return this.pokemonDetailsData.sprites.front_shiny;
    },
    pokemonTypes(): PokemonDataTypes[] {
      if (!this.pokemonDetailsData.types) {
        return [];
      }
      return this.pokemonDetailsData.types;
    },
    isMultipleTypes() {
      return this.pokemonTypes.length > 1;
    },
    pokemonTypeName(): string {
      return this.pokemonDetailsData.types
        ? this.pokemonDetailsData.types[0].type.name
        : "water";
    },
  },
  methods: {},
  async created() {
    this.pokemonDetailsData = await getPokemon(
      this.$route.params.name as string
    );
  },
});
</script>

<style lang="scss">
img {
  width: 20%;
}
.PokemonIdName {
  background: #d1e8e4;
  padding: 0.5rem 0;
}
.PokemonSize {
  background: #eae7c6;
  padding-left: 45%;
  text-align: left;

  h1 {
    margin-block-start: 0;
  }
}
.PokemonSizeNumber {
  font-size: 1.5rem;
}
</style>
