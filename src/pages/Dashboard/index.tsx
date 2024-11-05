import { Container } from "../../components/Container";
import TableComponent from "../../components/Table";
import Title from "../../components/Title";
import useData from "../../hooks/useData";
import IConsulta from "../../types/IConsulta";

const Dashboard = () => {
  const { data } = useData<IConsulta[]>({ endpoint: "consultas" });
  return (
    <Container>
      <Title>Área Administrativa</Title>
      <TableComponent arry={data}/>
    </Container>
  );
};

export default Dashboard;