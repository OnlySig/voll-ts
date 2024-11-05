import IConsulta from "../types/IConsulta";
import IProfissional from "../types/IProfissional";

interface  IDados {
  nome: string
  consultas: number
}

interface IProps {
  prof: IProfissional[] | null
  consultas: IConsulta[] | null
}

const useGraficoDados = ({ prof, consultas } : IProps) => {
  let dados: IDados[] = [];
  if(prof && consultas) {
    dados = prof
      .map((profissional) => ({
        nome: profissional.nome,
        consultas: consultas
          .filter((consulta) => consulta.profissional
            .some((prof) => prof.nome === profissional.nome)).length
      }));
  }
  return dados;
};

export default useGraficoDados;