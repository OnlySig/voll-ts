import styled from "styled-components";
import { Container } from "../../components/Container";
import Grafico from "../../components/Grafico";
import TableComponent from "../../components/Table";
import Title from "../../components/Title";
import useData from "../../hooks/useData";
import IConsulta from "../../types/IConsulta";
import Avaliacoes from "../../components/Avaliacoes";
import Botao from "../../components/Botao";

const StyledDiv = styled.div`
  background-color: var(--cinza-claro);
  padding: 2em;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06),
    0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04);
`;

const Dashboard = () => {
  const { data: dataConsultas, error: errorConsultas } = useData<IConsulta[]>({
    endpoint: "consultas",
  });
  const { data: dataProf, error: errorProf } = useData<IConsulta[]>({
    endpoint: "profissionais",
  });
  if (errorConsultas || errorProf) console.log("Erro doidão");
  return (
    <Container>
      <StyledDiv>
        <div>
          <Title>Área Administrativa</Title>
          <Botao variants="main">Cadastrar especialista</Botao>
        </div>
        <TableComponent arry={dataConsultas} />
        <Grafico prof={dataProf} consultas={dataConsultas} />
        <Avaliacoes />
      </StyledDiv>
    </Container>
  );
};

export default Dashboard;
