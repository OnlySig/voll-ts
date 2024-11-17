import { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  variants: string;
}

const StyledButton = styled.button<IProps>`
  padding: ${(e) => (e.variants === "default" ? "14px 16px" : "14px 42px")};
  background-color: var(--azul-escuro);
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  border: none;
  border-radius: 8px;
  height: 100%;
  cursor: pointer;
`;

const Botao = ({
  variants = "default",
  children,
}: {
  variants?: string;
  children: ReactNode;
}) => {
  return <StyledButton variants={variants}>{children}</StyledButton>;
};

export default Botao;
