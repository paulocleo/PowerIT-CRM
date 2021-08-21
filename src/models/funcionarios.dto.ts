import { DateTime } from "ionic-angular"

export interface FuncionariosDTO {
    Id                  : string;
    NomeCompleto        : string;
    NomeUsuario         : string;
    Telemovel           : number;
    TrabalhoAtual       : string;
    Nascimento          : DateTime;
    ArquivoCurriculoId  : number;
    ProjetoAtual        : string;
    FuncaoAtual         : string;
    isAtivo             : boolean;
    CreatedAt           : DateTime;
    UpdatedAt           : DateTime;
}