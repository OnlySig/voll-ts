import styled from "styled-components";
import medicos from "../../assets/header/medicos.png";
import test from "../../assets/header/Rectangle1.png";

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  background-color: #339cff;
  justify-content: space-around;
  h2 {
    max-width: 588px;
  }
`;

const StyledImg = styled.img`
  position: absolute;
  width: 100%;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h2>
        Encontre profissionais de diversas especialidades e agende sua consulta
        com facilidade!
      </h2>
      <img src={medicos} alt="" />
      <StyledImg src={test} alt="" />
    </StyledHeader>
  );
};

export default Header;
