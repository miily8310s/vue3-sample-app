import { GenericResponse, http } from "../config";
import { Pokemons } from "@/entities";

export const getPokemons = (): Promise<GenericResponse<Pokemons>> => {
  const getPokemonsURL = "pokemon?limit=151&offset=0";
  return http.get(getPokemonsURL).then((res) => res.data);
};
export const getPokemon = (
  pokemonName: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<GenericResponse<any>> => {
  const getPokemonURL = `pokemon/${pokemonName}`;
  return http.get(getPokemonURL).then((res) => res.data);
};
