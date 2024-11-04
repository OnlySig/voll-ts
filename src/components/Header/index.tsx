import styled from "styled-components";
import logo from "../../assets/header/logo.png";
import perfilDefault from "../../assets/header/perfil.png";
import { Link } from "react-router-dom";

const StyledHeader = styled.header `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px auto 80px auto;
  img {
    height: fit-content;
  }
  div {
    display: flex;
    align-items: center;
    gap: 32px;
  }
  a {
    color: var(--azul-escuro);
    font-weight: 700;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="logo da empresa voll."/>
      <div>
        <img src={perfilDefault} alt="imagem do perfil default do usuário."/>
        <Link to="#">
          Sair
        </Link>
      </div>
    </StyledHeader>
  );
};

export default Header;