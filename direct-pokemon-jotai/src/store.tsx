import { atom, useAtom } from "jotai";
import { atomWithQuery } from "jotai-tanstack-query";

export interface Pokemon {
  id: number;
  name: string[];
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

export const searchAtom = atom("");

const allPokemon = atomWithQuery<Pokemon[]>((get) => ({
  queryKey: ["pokemon"],
  queryFn: () => fetch("/pokemon.json").then((res) => res.json()),
  initialData: [], // have to
}));

export const pokemonAtom = atom((get) => {
  const search = get(searchAtom).toLowerCase();
  const all = get(allPokemon);

  // all.data
  return all.data.filter((p) => p.name.english.toLowerCase().includes(search));
});

export const sortedPokemonAtom = atom((get) => {
  const pokemon = get(pokemonAtom);
  return pokemon
    .slice(0, 10)
    .sort((a, b) => a.name.english.localeCompare(b.name.english));
});
