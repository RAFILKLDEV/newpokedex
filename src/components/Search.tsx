import { SearchBar, SearchInput, SearchPokeball } from "@/styles/SearchS";

export function Search() {
  return (
    <SearchBar>
      <SearchInput />
      <SearchPokeball
        src={
          "https://1.bp.blogspot.com/_KBmmkCxTLY8/TMBfCU6xtBI/AAAAAAAAAFI/Ia5W4Suucww/s1600/kawax-pokeball-3097.png"
        }
      />
    </SearchBar>
  );
}
