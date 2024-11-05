import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Table, tableCellClasses} from "@mui/material";
import IConsulta from "../../types/IConsulta";
import styled from "@emotion/styled";

const StyledCell = styled(TableCell)(()=>({
  [`&.${tableCellClasses.head}`]: {
    color: "var(--azul-escuro)",
    fontSize: 18,
    fontWeight: 700,
    fontFamily: "var(--fonte-principal)"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    fontFamily: "var(--fonte-principal)"
  }
}));

const StyledRow = styled(TableRow)(()=>({
  ["&:nth-of-type(odd)"]: {
    backgroundColor: "var(--cinza-claro)",
  }
}));

const TableComponent = ({ arry } : {arry: IConsulta[] | null}) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="tabela-custom">
          <TableHead>
            <TableRow>
              <StyledCell>Data</StyledCell>
              <StyledCell>Horário</StyledCell>
              <StyledCell>Profissional</StyledCell>
              <StyledCell>Especialidade</StyledCell>
              <StyledCell>Paciente</StyledCell>
              <StyledCell>Modalidade</StyledCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {arry?.map((consulta) => 
              <>
                <StyledRow>
                  <StyledCell component="th" scope="row">
                    {new Date(consulta.data.replace(/-/g, "/")).toLocaleDateString()}
                  </StyledCell>
                  <StyledCell>
                    {consulta.horario}
                  </StyledCell>
                  <StyledCell>
                    {consulta.profissional[0].nome}
                  </StyledCell>
                  <StyledCell>
                    {consulta.profissional[0].especialidade}
                  </StyledCell>
                  <StyledCell>
                    {consulta.paciente}
                  </StyledCell>
                  <StyledCell>
                    {consulta.modalidade}
                  </StyledCell>
                </StyledRow>
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableComponent;