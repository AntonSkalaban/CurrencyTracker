import styled from "styled-components";

export const StyledWrapper = styled.div`
  max-width: 1224px;
  height: 100%;
  box-sizing: content-box;
  margin: 0 auto;
  padding: 0 10px;

  @media ${({ theme }) => theme.media.large} {
    max-width: 1000px;
  }
`;
