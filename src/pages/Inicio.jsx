import { PokeCard } from "@/components/PokeCard";
import { Content } from "../components/Content";
import { Header } from "../components/Header";
import { GlobalStyleS } from "../styles/GlobalStyles";

export async function getStaticProps() {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon/genesect");
  const pokemon = await data.json();
  console.log(pokemon.name);

  return {
    props: { pokemon },
  };
}

export default function Home({ pokemon }) {
  return (
    <>
      <GlobalStyleS />
      <Header></Header>
      <Content>
        <PokeCard pokemon={pokemon} />
      </Content>
    </>
  );
}
