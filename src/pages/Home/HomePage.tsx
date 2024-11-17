import styled from "styled-components";
import Header from "../../components/Header";
import ProcuraMedico from "../../components/ProcuraMedico";
import Atividades from "../../components/Atividades";

const Content = styled.div`
  max-width: 1440px;
  margin: 40px auto;
`;

const HomePage = () => {
  return (
    <>
      <Header />
      <Content>
        <ProcuraMedico />
        <Atividades />
      </Content>
    </>
  );
};

export default HomePage;
