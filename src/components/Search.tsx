import { SearchBar, SearchInput, SearchPokeball } from "@/styles/SearchS";
import { useState } from "react";

export function Search({
  search,
  setSearch,
}: {
  search: string;
  setSearch: Function;
}) {
  return (
    <SearchBar>
      <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} />
      <SearchPokeball
        src={
          "https://1.bp.blogspot.com/_KBmmkCxTLY8/TMBfCU6xtBI/AAAAAAAAAFI/Ia5W4Suucww/s1600/kawax-pokeball-3097.png"
        }
      />
    </SearchBar>
  );
}
