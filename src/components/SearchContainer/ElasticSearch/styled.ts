import { styled } from "styled-components";

export const ElasticSearchContainer = styled.div`
  width: 450px;
  height: 66px;
  border-radius: 8px;
  position: relative;
`;
export const StyledInput = styled.input`
  width: 100%;
  height: 100%;

  border: none;
  border-radius: 8px;
  background: #1b2028;
  padding-left: 20px;
  outline: none;

  font-size: 18px;
  line-height: 27px;
  color: #9e9e9e;
`;

export const StyledSearchButton = styled.button`
  width: 28px;
  height: 28px;
  position: absolute;
  right: 20px;
  top: calc(50% - 14px);
  background: transparent;
  cursor: pointer;
`;
