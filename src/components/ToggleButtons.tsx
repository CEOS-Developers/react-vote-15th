import React from "react";
import styled from "styled-components";
import { IToggleButtons } from "../lib/interface";

const ToggleButtonBox = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 9rem;
`;
const ToggleButton = styled.button<{ part: string; curPart: string }>`
  cursor: pointer;

  border: 0.01rem solid ${({ theme }) => theme.light_green};
  border-radius: ${({ part }) =>
    part === "f" ? "0.5rem 0 0 0.5rem" : "0 0.5rem 0.5rem 0"};

  background-color: ${({ curPart, part, theme }) =>
    curPart === part ? theme.light_green : theme.black};
  color: ${({ curPart, part, theme }) =>
    curPart === part ? theme.black : theme.light_green};

  padding: 0.8rem;
  width: 7rem;

  :disabled {
    cursor: default;
  }
`;

const ToggleButtons = ({ curPart, setCurPart }: IToggleButtons) => {
  return (
    <ToggleButtonBox>
      <ToggleButton
        disabled={curPart === "f"}
        part={"f"}
        curPart={curPart}
        onClick={() => setCurPart("f")}
      >
        프론트엔드
      </ToggleButton>
      <ToggleButton
        disabled={curPart === "b"}
        part={"b"}
        curPart={curPart}
        onClick={() => setCurPart("b")}
      >
        백엔드
      </ToggleButton>
    </ToggleButtonBox>
  );
};

export default ToggleButtons;
