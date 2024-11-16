import styled from "styled-components";
import logo from "../../assets/header/logo.png";
import search from "../../assets/header/search.svg";
import perfilDefault from "../../assets/header/perfil.png";
import { Link, useLocation } from "react-router-dom";
const test = document.querySelector("#test");

interface IProps {
  path: string;
}

const StyledHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px auto;
  max-width: 1440px;
  @media screen and (max-width: 1440px) {
    padding: 0 120px;
  }
  img {
    height: fit-content;
  }
  a {
    color: var(--azul-escuro);
    font-weight: 700;
  }
`;

const StyledDiv = styled.div<IProps>`
  display: ${(e) => (e.path === "/" ? "none" : "flex")};
  align-items: center;
  gap: 32px;
`;

const StyledInputContainer = styled.aside<IProps>`
  display: ${(e) => (e.path === "/dashboard" ? "none" : "flex")};
  align-items: center;
  gap: 24px;
  div {
    position: relative;
    display: flex;
    align-items: center;
  }
  input {
    background-color: transparent;
    padding: 14px 16px;
    border-radius: 8px;
    border: 1px solid #90989f;
  }
  img {
    position: absolute;
    right: 10px;
    background-color: #fff;
  }
`;
const StyledButton = styled.div`
  a {
    padding: 12px 18px;
    background-color: var(--azul-escuro);
    color: var(--branco);
    border-radius: 8px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const Nav = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <StyledHeader>
      <img src={logo} alt="logo da empresa voll." />
      <StyledDiv path={pathname}>
        <img src={perfilDefault} alt="imagem do perfil default do usuário." />
        <Link to="#">Sair</Link>
      </StyledDiv>
      <StyledInputContainer path={pathname}>
        <Link to={"/sobre"}>Sobre</Link>
        <Link to={"/cadastrar"}>Cadastre-se</Link>
        <div>
          <input type="text" id="test" />
          <img src={search} alt="" onClick={() => test?.focus()} />
        </div>
        <StyledButton>
          <Link to={"/login"}>Login</Link>
        </StyledButton>
      </StyledInputContainer>
    </StyledHeader>
  );
};

export default Nav;
