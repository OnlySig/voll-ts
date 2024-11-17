import styled from "styled-components";
import medicos from "../../assets/header/medicos.png";
import test from "../../assets/header/Rectangle1.png";

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  background-color: #339cff;
  justify-content: space-around;
  max-height: 380px;
  h2 {
    max-width: 470px;
    color: #fff;
  }
`;

const StyledImg = styled.img`
  position: absolute;
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const StyledImgMedic = styled.img`
  position: relative;
  top: -10px;
  z-index: 2;
  height: 400px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h2>
        Encontre profissionais de diversas especialidades e agende sua consulta
        com facilidade!
      </h2>
      <StyledImgMedic src={medicos} alt="" />
      <StyledImg src={test} alt="" />
    </StyledHeader>
  );
};

export default Header;
