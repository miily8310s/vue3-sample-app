<template>
  <div
    class="styledCard"
    :style="{
      backgroundColor: pokemonBackgroundColor,
    }"
  >
    <h1>
      <span>{{ pokemonData.id }}</span> {{ pokemonData.name }}
    </h1>
    <img :src="pokemonFront" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { PokemonResult } from "@/entities/index";
import { getPokemon } from "@/services/pokemon";

interface DataType {
  // TODO: specify type definition
  pokemonData: any;
}

const typeColors: { [key: string]: string } = {
  bug: "#2ADAB1",
  dark: "#636363",
  dragon: "#E9B057",
  electric: "#FCFFA6",
  fairy: "#ffdbdb",
  fighting: "#90a4b5",
  fire: "#FF5C58",
  flying: "#E8DCB3",
  ghost: "#091353",
  grass: "#80ED99",
  ground: "#F5C6A5",
  ice: "#C8DDEA",
  normal: "#ccc",
  poison: "#cc89ff",
  psychic: "#9D84B7",
  rock: "#b7b7b7",
  steel: "#D5D5D5",
  water: "#B2F9FC",
};

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
    pokemonFront(): string {
      return this.pokemonData.sprites
        ? this.pokemonData.sprites.front_default
        : "";
    },
    pokemonTypeName(): string {
      return this.pokemonData.types
        ? this.pokemonData.types[0].type.name
        : "water";
    },
    pokemonBackgroundColor(): string {
      return typeColors[this.pokemonTypeName];
    },
  },
  methods: {},
  async created() {
    this.pokemonData = await getPokemon(this.pokemon.name);
  },
  // TODO: setupだとテンプレートに表示できないため、一旦Options APIで対処
  // setup() {
  // },
});
</script>

<style lang="scss" scoped>
.styledCard {
  width: 250px;
  margin: 5px;
  border-radius: 5%;
}
</style>
