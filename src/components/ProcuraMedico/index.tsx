import styled from "styled-components";
import InputHome from "../InputHome/input";
import SearchIcon from "../Icons/SearchIcon";
import Location from "../Icons/Location";
import Botao from "../Botao";
import CategoriaTags from "../CategoriaTags";

const StyledContainer = styled.div`
  padding: 32px;
  border-radius: 8px;
  background-color: #fff;
  text-align: center;
  @media screen and (min-width: 1440px) {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const ProcuraMedico = () => {
  return (
    <StyledContainer>
      <StyledDiv>
        <InputHome icon={<SearchIcon />} placeholder="Digite a especialidade" />
        <InputHome icon={<Location />} placeholder="Digite a Localização" />
        <Botao>Buscar</Botao>
      </StyledDiv>
      <CategoriaTags />
    </StyledContainer>
  );
};

export default ProcuraMedico;
