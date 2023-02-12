import { Header } from "@/components/Header";
import { Content } from "@/components/Content";
import { GlobalStyleS } from "@/styles/GlobalStyles";
import { PokeCard } from "@/components/PokeCard";

export async function getStaticProps(context) {
  

  const data = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const pokemon = await data.json();
  console.log(pokemon.name);

  return {
    props: { data },
  };
}

export default function Home({ data }) {
  console.log(data?.name);
  return (
    <>
      <GlobalStyleS />
      <Header></Header>
      <Content>
        <div>Teste pokemon {data?.name}</div>
        <PokeCard></PokeCard>
      </Content>
    </>
  );
}
