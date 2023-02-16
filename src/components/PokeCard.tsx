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

interface PokeCard {
  pokemon: string[];
}

export function PokeCard({ pokemon }) {
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
    return TypeColors.map((e) => {
      if (color === e.key) return e.label;
    });
  }

  function getStatPercentage(stat: number) {
    const result = Math.floor((stat / 255) * 100);
    return result + "%";
  }

  return (
    <PokeCardS>
      <PokeBar>
        <PokeName>#{("000" + pokemon?.order).slice(-3)}</PokeName>
      </PokeBar>
      <PokeSelect>
        <PokeImg
          src={pokemon?.sprites?.other?.["official-artwork"]?.front_default}
        />
      </PokeSelect>
      <PokeInfo>
        <PokeName>{pokemon?.name}</PokeName>
        <PokeDiv>
          <PokeWeight>
            <PokeName>{(pokemon.weight / 10).toFixed(1)} Kg</PokeName>
            <PokeHeight>Peso</PokeHeight>
          </PokeWeight>
          <PokeWeight>
            {pokemon.types.map((e) => (
              <PokeType color={getTypeColor(e.type.name)} key={e}>
                {e.type.name}
              </PokeType>
            ))}
          </PokeWeight>
          <PokeWeight>
            <PokeName>{(pokemon.height / 10).toFixed(1)} m</PokeName>
            <PokeHeight>Altura</PokeHeight>
          </PokeWeight>
        </PokeDiv>
        <PokeDiv>{pokemon.stats.map((e) => {})}</PokeDiv>
        <PokeDiv>
          <PokeStats size={"auto"}>
            <PokeStat>HP</PokeStat>
            <PokeStat>ATK</PokeStat>
            <PokeStat>DEF</PokeStat>
            <PokeStat>SPA</PokeStat>
            <PokeStat>SPD</PokeStat>
            <PokeStat>SPE</PokeStat>
          </PokeStats>
          <PokeStats>
            {pokemon.stats.map((e) => (
              <PokeStatBar key={e}>
                <PokeStatBarContent
                  width={getStatPercentage(e.base_stat)}
                  color={getTypeColor(pokemon.types[0].type.name)}
                ></PokeStatBarContent>
              </PokeStatBar>
            ))}
          </PokeStats>
          <PokeStats>
            {pokemon.stats.map((e) => (
              <div key={e}>{e.base_stat}/255</div>
            ))}
          </PokeStats>
        </PokeDiv>
      </PokeInfo>
    </PokeCardS>
  );
}
