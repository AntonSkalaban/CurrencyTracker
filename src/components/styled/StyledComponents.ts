import { styled } from "styled-components";

export const Title2 = styled.h2<{ size?: number }>`
  font-size: ${(props) => props.size || 42}px;
`;

export const Title3 = styled.h3<{ size?: number }>`
  font-size: ${(props) => props.size || 36}px;
`;
