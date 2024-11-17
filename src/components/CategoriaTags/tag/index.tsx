import styled from "styled-components";
import Close from "../../Icons/Close";
import { ReactNode } from "react";

const StyledTag = styled.li`
  background-color: var(--cinza-claro);
  color: var(--cinza);
  padding: 6px 8px;
  display: flex;
  align-items: baseline;
  gap: 10px;
  button {
    border: none;
    background-color: transparent;
    color: var(--cinza);
    cursor: pointer;
    font-size: 16px;
    width: 14px;
  }
`;

interface IProps {
  tagName: ReactNode;
  onClick: () => void;
}

const Tag = ({ tagName, onClick }: IProps) => {
  return (
    <StyledTag>
      {tagName}
      <button onClick={onClick}>
        <Close />
      </button>
    </StyledTag>
  );
};

export default Tag;
