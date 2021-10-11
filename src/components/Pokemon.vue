<template>
  <div class="styledCard" style="background-color: #2adab1">
    <h1>
      <span>{{ pokemonData.id }}</span> {{ pokemonData.name }}
    </h1>
    <img :src="pokemonFront" />
  </div>
</template>

<!-- TODO: style bindの方法調べる -->
<!-- :style="{
      'background-color': pokemonBackgroundColor(
        pokemonData.types[0].type.name
      ),
    }" -->

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
  electric: "#ffeb5b",
  fairy: "#ffdbdb",
  fighting: "#90a4b5",
  fire: "#F7786B",
  flying: "#E8DCB3",
  ghost: "#755097",
  grass: "#2ADAB1",
  ground: "#dbd3a2",
  ice: "#C8DDEA",
  normal: "#ccc",
  poison: "#cc89ff",
  psychic: "#705548",
  rock: "#b7b7b7",
  steel: "#999",
  water: "#58ABF6",
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
  },
  methods: {
    pokemonBackgroundColor(typeName: any): string {
      if (!this.pokemonData.types || !this.pokemonData.types[0]) {
        return "#58ABF6";
      }
      console.log(this.pokemonData.types[0].type.name);
      console.log(typeColors[typeName]);
      return typeColors[typeName];
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

<style lang="scss" scoped>
.styledCard {
  width: 250px;
  margin: 5px;
}
</style>
