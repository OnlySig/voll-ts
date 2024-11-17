import styled from "styled-components";
import useData from "../../hooks/useData";
import Card from "../Card";
import Title from "../Title";
import Botao from "../Botao";

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 16px;
`;

const Avaliacoes = () => {
  const { data } = useData({ endpoint: "profissionais" });
  if (!data) {
    return (
      <>
        <Title img={"avaliacao"}>Avaliações de especialistas</Title>
        <p>Não à avaliações para mostrar</p>
      </>
    );
  }
  return (
    <>
      <Title img={"avaliacao"}>Avaliações de especialistas</Title>
      <StyledSection>
        {data?.map((avaliacao) => (
          <Card {...avaliacao} key={avaliacao.id} />
        ))}
      </StyledSection>
      {data?.length > 4 && <Botao>Ver mais</Botao>}
    </>
  );
};

export default Avaliacoes;
