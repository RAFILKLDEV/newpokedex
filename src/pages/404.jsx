"use client";
import { Header } from "../components/Header";
import { Content } from "../components/Content";
import { GlobalStyleS } from "../styles/GlobalStyles";

export default function Custom404() {
  return (
    <>
      <GlobalStyleS />
      <Header></Header>
      <Content>
        <div>Pagina não Encontrada!</div>
      </Content>
    </>
  );
}
