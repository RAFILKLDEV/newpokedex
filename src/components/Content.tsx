import React from "react";
import { ContentS } from "@/styles/ContentS";

export function Content({ children }: { children?: React.ReactNode }) {
  return <ContentS>{children}</ContentS>;
}
