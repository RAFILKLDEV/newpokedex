import { PokeCard } from "@/components/PokeCard";
import { Content } from "../components/Content";
import { Header } from "../components/Header";
import { Search } from "../components/Search";
import { GlobalStyleS } from "../styles/GlobalStyles";

export async function getStaticProps() {
  const data = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
  );
  const pokemons = await data.json();

  console.log(pokemons);

  return {
    props: { pokemons },
  };
}

export default function Home({ pokemons }) {
  return (
    <>
      <GlobalStyleS />
      <Header />
      <Content>
        <Search />
        {pokemons.results.map((e) => (
          <PokeCard key={e.name} pokemon={e} />
        ))}
      </Content>
    </>
  );
}
