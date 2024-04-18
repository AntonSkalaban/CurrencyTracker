import { styled } from "styled-components";

export const ChartEditorContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 40px auto;
`;

export const ChartEditorForm = styled.form`
  width: fit-content;

  display: flex;
  flex-direction: column;

  gap: 20px;
  margin: 40px auto;
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ChartEditorButton = styled.button`
  width: 120px;
  height: 40px;

  align-self: center;
  cursor: pointer;
`;
