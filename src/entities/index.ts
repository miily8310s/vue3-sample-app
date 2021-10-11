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
