"use client";
import {
  PokeBar,
  PokeInfo,
  PokeCardS,
  PokeDiv,
  PokeImg,
  PokeName,
  PokeSelect,
  PokeWeight,
  PokeHeight,
  PokeType,
  PokeStats,
  PokeStat,
  PokeStatBar,
  PokeStatBarContent,
} from "@/styles/PokeCardS";
import { useEffect, useState } from "react";

interface PokeCardTypes {
  name: string;
  id: number;
  weight: number;
  height: number;
  sprites: { other: { ["official-artwork"]: { front_default: string } } };
  types: { type: { name: string } }[];
  stats: { base_stat: number }[];
}

export function PokeCard({ pokemon }: { pokemon: string }) {
  const [onePokemon, setOnePokemon] = useState<PokeCardTypes>();

  useEffect(() => {
    async function getPokemon(poke: string) {
      const data = await fetch(poke);
      const pokemons = await data.json();
      setOnePokemon(pokemons);
    }
    getPokemon(pokemon);
  }, [pokemon]);

  const TypeColors = [
    {
      label: "#A8A878",
      key: "normal",
      index: 1,
    },
    {
      label: "#F08030",
      key: "fire",
      index: 2,
    },
    {
      label: "#C03028",
      key: "fighting",
      index: 3,
    },
    {
      label: "#6890F0",
      key: "water",
      index: 4,
    },
    {
      label: "#A890F0",
      key: "flying",
      index: 5,
    },
    {
      label: "#78C850",
      key: "grass",
      index: 6,
    },
    {
      label: "#A040A0",
      key: "poison",
      index: 7,
    },
    {
      label: "#F8D030",
      key: "electric",
      index: 8,
    },
    {
      label: "#E0C068",
      key: "ground",
      index: 9,
    },
    {
      label: "#F85888",
      key: "psychic",
      index: 10,
    },
    {
      label: "#B8A038",
      key: "rock",
      index: 11,
    },
    {
      label: "#98D8D8",
      key: "ice",
      index: 12,
    },
    {
      label: "#A8B820",
      key: "bug",
      index: 13,
    },
    {
      label: "#7038F8",
      key: "dragon",
      index: 14,
    },
    {
      label: "#705898",
      key: "ghost",
      index: 15,
    },
    {
      label: "#705848",
      key: "dark",
      index: 16,
    },
    {
      label: "#B8B8D0",
      key: "steel",
      index: 17,
    },
    {
      label: "#EE99AC",
      key: "fairy",
      index: 18,
    },
  ];

  function getTypeColor(color: string) {
    return TypeColors.find((e) => color === e.key)?.label;
  }

  function getStatPercentage(stat: number) {
    if (stat !== undefined) {
      const result = Math.floor((stat / 255) * 100);
      return `${result}%`;
    }
    return "0%";
  }

  function getStat(att: number | undefined) {
    if (att !== undefined) {
      return (att / 10).toFixed(1);
    }
  }

  const img = onePokemon?.sprites?.other?.["official-artwork"]?.front_default;

  return (
    <PokeCardS>
      <PokeBar>
        <PokeName>#{("000" + onePokemon?.id).slice(-3)}</PokeName>
      </PokeBar>
      <PokeSelect>
        <PokeImg src={img} />
      </PokeSelect>
      <PokeInfo>
        <PokeName>{onePokemon?.name}</PokeName>
        <PokeDiv>
          <PokeWeight>
            <PokeName>{getStat(onePokemon?.weight)} Kg</PokeName>
            <PokeHeight>Peso</PokeHeight>
          </PokeWeight>
          <PokeWeight>
            {onePokemon?.types.map((e, i) => (
              <PokeType color={getTypeColor(e.type.name)} key={i}>
                {e.type.name}
              </PokeType>
            ))}
          </PokeWeight>
          <PokeWeight>
            <PokeName>{getStat(onePokemon?.height)} m</PokeName>
            <PokeHeight>Altura</PokeHeight>
          </PokeWeight>
        </PokeDiv>
        <PokeDiv>
          <PokeStats>
            <PokeStat>HP</PokeStat>
            <PokeStat>ATK</PokeStat>
            <PokeStat>DEF</PokeStat>
            <PokeStat>SPA</PokeStat>
            <PokeStat>SPD</PokeStat>
            <PokeStat>SPE</PokeStat>
          </PokeStats>
          <PokeStats>
            {onePokemon?.stats.map((e, i) => (
              <PokeStatBar key={i}>
                <PokeStatBarContent
                  color={getTypeColor(onePokemon?.types[0].type.name)}
                  x={getStatPercentage(e.base_stat)}
                ></PokeStatBarContent>
              </PokeStatBar>
            ))}
          </PokeStats>
          <PokeStats>
            {onePokemon?.stats.map((e, i) => (
              <div key={i}>{e.base_stat}/255</div>
            ))}
          </PokeStats>
        </PokeDiv>
      </PokeInfo>
    </PokeCardS>
  );
}
