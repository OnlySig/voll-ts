import { Container } from "../../components/Container";
import Grafico from "../../components/Grafico";
import TableComponent from "../../components/Table";
import Title from "../../components/Title";
import useData from "../../hooks/useData";
import IConsulta from "../../types/IConsulta";

const Dashboard = () => {
  const { data: dataConsultas, error: errorConsultas } = useData<IConsulta[]>({ endpoint: "consultas" });
  const { data: dataProf, error: errorProf } = useData<IConsulta[]>({ endpoint: "profissionais" });
  if(errorConsultas || errorProf) console.log("Erro doidão");
  return (
    <Container>
      <Title>Área Administrativa</Title>
      <TableComponent arry={dataConsultas}/>
      <Grafico prof={dataProf} consultas={dataConsultas}/>
    </Container>
  );
};

export default Dashboard;