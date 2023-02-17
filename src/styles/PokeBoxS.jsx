import styled from "styled-components";

export const PokeBoxS = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: ${(props) => props.color};
  width: 300px;
  height: 300px;
`;

export const PokeBoxImg = styled.img`
  width: 200px;
  height: 200px;
`;

export const PokeBoxTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
`;
