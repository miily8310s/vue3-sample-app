<template>
  <div
    class="styledCard"
    :style="{
      backgroundColor: pokemonBackgroundColor,
    }"
  >
    <h1>
      <!-- <router-link
        :to="{ name: 'PokemonDetails', params: { name: pokemon.name } }"
      > -->
      <span>{{ pokemonData.id }}</span> {{ pokemonData.name }}
      <!-- </router-link> -->
    </h1>
    <img :src="pokemonFront" />
    <div class="styledCardTypes" :class="{ '-multipleTypes': isMultipleTypes }">
      <div
        v-for="(pokemonType, index) in pokemonTypes"
        :key="`${pokemonData.name}_${index}`"
      >
        <span class="styledCardType">{{ pokemonType.type.name }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { PokemonResult, PokemonDataTypes } from "@/entities/index";
import { getPokemon } from "@/services/pokemon";

interface DataType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    pokemonBackgroundColor(): string {
      return typeColors[this.pokemonTypeName];
    },
  },
  methods: {},
  async created() {
    try {
      this.pokemonData = await getPokemon(this.pokemon.name);
    } catch (error) {
      console.log(error);
    }
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

  img {
    width: 40%;
  }

  h1 {
    a {
      text-decoration: none;
      color: inherit;

      &:hover {
        opacity: 0.6;
      }
    }
  }
}
.styledCardTypes {
  display: flex;
  flex-wrap: wrap;
  margin-left: 6rem;
  padding-bottom: 1rem;
  color: #082032;

  &.-multipleTypes {
    margin-left: 4.5rem;
  }
}

.styledCardType {
  padding: 2px 6px;
  border-radius: 10%;
  background-color: #c1ffd7;
  margin-right: 5px;
}
</style>
