import avaliacao from "../../assets/title/avaliacao.png";
import grafico from "../../assets/title/grafico.png";
import consulta from "../../assets/title/consulta.png";
import { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  img?: string
  children?: ReactNode
}

interface IImagens {
  avaliacao: string,
  grafico: string,
  consulta: string,
}

const StyledSpan = styled.span<IProps> `
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 25px;
  height: 25px;
  background-image: ${props=> props.img ? `url(${props.img})` : "none"};
`;

const StyledH2 = styled.h2 `
  color: var(--azul-claro);
`;

const StyledContainer = styled.div `
  display: flex;
  align-items: center;
`; 

const objImagens: IImagens = {
  avaliacao: avaliacao,
  consulta,
  grafico
};
const Title = ({ img, children } : IProps) => {
  return (
    <StyledContainer>
      { img && <StyledSpan img={objImagens[img as keyof IImagens]}/> }
      <StyledH2>
        {children}
      </StyledH2>
    </StyledContainer>
  );
};

export default Title;