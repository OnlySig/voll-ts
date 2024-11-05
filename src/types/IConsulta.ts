import IProfissional from "./IProfissional";

export default interface IConsulta extends IProfissional {
  id: number
  data: string
  horario: string
  profissional: IProfissional[]
  paciente: string
  modalidade: string
// eslint-disable-next-line semi
} 