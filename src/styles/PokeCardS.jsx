"use client";
import styled from "styled-components";

export const PokeCardS = styled.div`
  background-color: black;
  width: 350px;
  height: 400px;
  display: flex;
  flex-direction: column;
`;

export const PokeBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
`;

export const PokeName = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 700;
`;

export const PokeImg = styled.img`
  width: 150px;
  height: 150px;
`;

export const PokeSelect = styled.div`
  display: flex;
  padding: 5px 10px;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const PokeSelector = styled.button`
  font-size: 50px;
  color: white;
  background-color: inherit;
`;
