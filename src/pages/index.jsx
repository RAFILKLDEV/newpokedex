import { PokeCard } from "@/components/PokeCard";
import { Content } from "../components/Content";
import { Header } from "../components/Header";
import { GlobalStyleS } from "../styles/GlobalStyles";

export async function getStaticProps() {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
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
        <h1>Seja Bem vindo a mais um projeto Front-End do RAFILKLDEV!</h1>
        <h2>Esse projeto tem em vista utilizar TypeScript, Next.js, Styled-Components, React e Jest!</h2>
        <h2>A Pokedex esta sendo renderizada em Server render!</h2>
      </Content>
    </>
  );
}
