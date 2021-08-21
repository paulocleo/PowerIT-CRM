import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs/Rx";
import { FuncionariosResponseDTO } from "../../models/funcionariosresponse.dto";

@Injectable()
export class FuncionariosService {

    constructor(public http: HttpClient) {

    }

    findAll() : Observable<FuncionariosResponseDTO[]>{
        return this.http.get<FuncionariosResponseDTO[]>(`${API_CONFIG.baseUrl}/Funcionarios/Get_Funcionarios`);
    }
    
}