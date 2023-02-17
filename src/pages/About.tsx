import { PokeBox } from "@/components/PokeBox";
import { Content } from "../components/Content";
import { Header } from "../components/Header";
import { GlobalStyleS } from "../styles/GlobalStyles";

export async function getStaticProps() {
  const data = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
  );
  const pokemon = await data.json();

  return {
    props: { pokemon },
  };
}

interface PokesTypes {
  pokemon: { results: { name: string }[] };
}

export default function Sobre({ pokemon }: PokesTypes) {
  return (
    <>
      <GlobalStyleS />
      <Header></Header>
      <Content>
        {pokemon.results.map((e, i) => (
          <PokeBox key={i} title={e.name} img={e.name}></PokeBox>
        ))}
      </Content>
    </>
  );
}
