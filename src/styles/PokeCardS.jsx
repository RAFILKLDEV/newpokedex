"use client";
import styled from "styled-components";

export const PokeCardS = styled.div`
  background-color: rgb(18, 18, 18);
  width: 350px;
  height: 450;
  display: flex;
  flex-direction: column;
  border-radius: 3%;
  padding: 15px;
`;

export const PokeBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
`;

export const PokeName = styled.div`
  color: white;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
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
  transform: scaleY(2);
  border: none;
`;

export const PokeInfo = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  color: white;
`;

export const PokeDiv = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0px 20px;
  width: 100%;
`;

export const PokeWeight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const PokeHeight = styled.div`
  color: #424242;
`;
export const PokeType = styled.div`
  background-color: ${(props) => props.color};
  padding: 5px 20px;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 600;
`;

export const PokeStats = styled.div`
  display: grid;
  width: ${(props) => props.size};
  gap: 5px;
`;

export const PokeStat = styled.div`
  font-weight: 600;
`;

export const PokeStatBar = styled.div`
  width: 200px;
  border: 1px solid black;
  padding: 2px;
`;

export const PokeStatBarContent = styled.div`
  background-color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: 100%;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  font-size: 10px;
`;
