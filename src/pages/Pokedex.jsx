import { PokeCard } from "@/components/PokeCard";
import { Content } from "../components/Content";
import { Header } from "../components/Header";
import { Search } from "../components/Search";
import { GlobalStyleS } from "../styles/GlobalStyles";
import { PokeDex } from "../components/PokeDex";
import { useState } from "react";

export async function getStaticProps() {
  const data = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=1279&offset=0"
  );
  const pokemons = await data.json();
  return {
    props: { pokemons },
  };
}

export default function Home({ pokemons }) {
  const [search, setSearch] = useState("");
  return (
    <>
      <GlobalStyleS />
      <Header />
      <Content>
        <Search
          search={search}
          setSearch={setSearch}
        />
        <PokeDex>
          {pokemons.results.map((e) => {
            if (e.name.toLowerCase().includes(search)) {
              return <PokeCard key={e.name} pokemon={e.url} />;
            }
          })}
        </PokeDex>
      </Content>
    </>
  );
}
