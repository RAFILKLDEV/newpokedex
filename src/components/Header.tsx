"use client";
import Link from "next/link";
import { HeaderS } from "../styles/HeaderS";

export function Header() {
  return (
    <>
      <HeaderS>
        <Link href={"/Inicio"}>Inicio</Link>
        <Link href={"/Pokedex"}>Pokedex</Link>
        <Link href={"/About"}>Sobre</Link>
      </HeaderS>
    </>
  );
}
