"use client";
import { PokeBoxImg, PokeBoxS, PokeBoxTitle } from "@/styles/PokeBoxS";

export function PokeBox({ title, img }: { title: string; img: string }) {
  return (
    <PokeBoxS>
      <PokeBoxImg src={img} />
      <PokeBoxTitle>{title}</PokeBoxTitle>
    </PokeBoxS>
  );
}
