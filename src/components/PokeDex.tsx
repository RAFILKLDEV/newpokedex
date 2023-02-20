import { PokeDexS, PokeList } from "@/styles/PokeDexS";

export function PokeDex({ children }: { children?: React.ReactNode }) {
  return (
    <PokeDexS>
      <PokeList>{children}</PokeList>
    </PokeDexS>
  );
}
