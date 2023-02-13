"use client";
import {
  PokeBar,
  PokeCardS,
  PokeImg,
  PokeName,
  PokeSelect,
  PokeSelector,
} from "@/styles/PokeCardS";

export function PokeCard({ pokemon }) {
  console.log(pokemon?.sprites?.versions?.generationvii?.ultrasunultramoon?.front_default);
  return (
    <PokeCardS>
      <PokeBar>
        <PokeName>{pokemon?.name}</PokeName>
        <PokeName>{pokemon?.name}</PokeName>
      </PokeBar>
      <PokeSelect>
        <PokeSelector>{"<"}</PokeSelector>
        <PokeImg
          src={pokemon?.sprites?.other?.officialartwork?.front_default}
        />
        <PokeSelector>{">"}</PokeSelector>
      </PokeSelect>
    </PokeCardS>
  );
}
