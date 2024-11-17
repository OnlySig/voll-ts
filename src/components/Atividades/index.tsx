import styled from "styled-components";
import Health from "../Icons/health";
import Calendar from "../Icons/Calendar";
import Notificaions from "../Icons/Notificaions";
import ThumbUp from "../Icons/ThumbUp";

const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  gap: 24px;
  list-style: none;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    background-color: var(--cinza-claro);
    color: var(--azul-escuro);
    border-radius: 8px;
    font-weight: 500;
    width: 282px;
    height: 132px;
  }
`;

const Atividades = () => {
  return (
    <StyledUl>
      <li>
        <Health />
        <p>Encontre especialistas</p>
      </li>
      <li>
        <Calendar />
        <p>Agende consultas</p>
      </li>
      <li>
        <Notificaions />
        <p>Defina lembretes</p>
      </li>
      <li>
        <ThumbUp />
        <p>Avalie o serviço</p>
      </li>
    </StyledUl>
  );
};

export default Atividades;
