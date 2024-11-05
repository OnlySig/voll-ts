import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import IProfissional from "../../types/IProfissional";
import IConsulta from "../../types/IConsulta";
import useGraficoDados from "../../hooks/useGraficoDados";
import styled from "styled-components";

interface IProps {
  consultas: IConsulta[] | null
  prof: IProfissional[] | null
}

const StyledDiv = styled.div `
  background-color: var(--branco);
  border-radius: 16px;
  padding: 16px;
  margin-top: 16px;
`;

// ? criação de graficos, doc da lib usada: https://recharts.org/en-US
const Grafico = ({ consultas, prof } : IProps) => {
  const dados = useGraficoDados({ prof, consultas });
  return (
    <StyledDiv>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          layout="vertical"
          data={dados}
          margin={{ top: 25, right: 40, left: 40, bottom: 25}}
        >
          <XAxis type="number"></XAxis>
          <YAxis type="category" dataKey="nome"></YAxis>
          <Bar dataKey="consultas" fill="#083860" barSize={30}></Bar>
        </BarChart>
      </ResponsiveContainer>
    </StyledDiv>
  );
};

export default Grafico;