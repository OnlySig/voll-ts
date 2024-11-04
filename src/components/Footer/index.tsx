import styled from "styled-components";
import face from "../../assets/footer/facebook.png";
import whatsapp from "../../assets/footer/whatsapp.png";
import insta from "../../assets/footer/instagram.png";

const StyledFooter = styled.footer `
  position: absolute;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  height: 112px;
  background-color: var(--azul-escuro);
  span {
    color: var(--cinza-claro);
  }
`;

const StyledDiv = styled.div `
  display: flex;
  gap: 24px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledDiv>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={face} alt="" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={whatsapp} alt="" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={insta} alt="" />
        </a>
      </StyledDiv>
      <div>
        <span>
          2023 © Desenvolvido por Pereira | Projeto fictício sem fins comerciais.
        </span>
      </div>
    </StyledFooter>
  );
};

export default Footer;