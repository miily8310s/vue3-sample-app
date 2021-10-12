export interface PokemonResult {
  name: string;
  url: string;
}

export interface Pokemons {
  count: number;
  next: string;
  previous: string | null;
  results: PokemonResult[];
}

export interface PokemonData {
  id: number;
  name: string;
  types: PokemonDataTypes[];
  sprites: {
    front_default: string;
  };
}

export interface PokemonDataTypes {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
