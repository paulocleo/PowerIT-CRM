import { FuncionariosDTO } from "./funcionarios.dto";
import { HabilidadesDTO } from "./habilidades.dto";

export interface FuncionariosResponseDTO {
    Funcionarios: FuncionariosDTO;
    Habilidades: HabilidadesDTO;
}