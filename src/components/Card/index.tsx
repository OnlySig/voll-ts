import styled from "styled-components";
import IProfissional from "../../types/IProfissional";
import { Rating } from "@mui/material";

type IProps = {
  src: string;
};

const StyledDivContainer = styled.div`
  display: flex;
  flex-grow: 1;
  gap: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  padding: 16px;
  border-radius: 8px;
  background-color: #fff;
  width: 500px;
`;

const StyledSpan = styled.span<IProps>`
  background-image: url(${(e) => e.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-width: 64px;
  height: 64px;
  border-radius: 9999px;
  border: 2px solid var(--azul-claro);
`;

const StyledDivInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const Card = ({ especialidade, imagem, nome, nota }: IProfissional) => {
  return (
    <StyledDivContainer>
      <StyledSpan src={imagem} />
      <StyledDivInfo>
        <div>
          <h3>{nome}</h3>
          <p>{especialidade}</p>
        </div>
        <div>
          <Rating name="simple-controlled" value={nota} readOnly />
        </div>
      </StyledDivInfo>
    </StyledDivContainer>
  );
};

export default Card;
