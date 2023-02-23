import { PokeType } from "@/styles/PokeCardS";
import { Content } from "../components/Content";
import { Header } from "../components/Header";
import { GlobalStyleS } from "../styles/GlobalStyles";

export default function Sobre() {
  return (
    <>
      <GlobalStyleS />
      <Header></Header>
      <Content>
        <h1>Obrigado por acompanhar mais um projeto da minha carreira de Front-End!</h1>
        <h1>Github: <a href="https://github.com/RAFILKLDEV">https://github.com/RAFILKLDEV</a></h1>
      </Content>
    </>
  );
}
