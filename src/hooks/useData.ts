import IConsulta from "../types/IConsulta";
import IProfissional from "../types/IProfissional";
import useFetch from "./useFetch";

type DataType = IConsulta[] | IProfissional[]

const useData = <T extends DataType>({ endpoint } : {endpoint : string}) => {
  const endpoints = {
    profissionais: "profissionais",
    consultas: "consultas",
    avaliacoes: "avaliacoes"
  };
  const url = endpoints[endpoint as keyof typeof endpoints];
  return useFetch<T>({url});
};

export default useData;