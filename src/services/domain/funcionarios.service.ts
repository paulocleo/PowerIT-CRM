import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FuncionariosDTO } from "../../models/funcionarios.dto";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs/Rx";

@Injectable()
export class FuncionariosService {

    constructor(public http: HttpClient) {

    }

    findAll() : Observable<FuncionariosDTO[]>{
        return this.http.get<FuncionariosDTO[]>(`${API_CONFIG.baseUrl}/funcionarios`);
    }

    findAllFuncionarios() : Array<FuncionariosDTO>{

        let listFuncionarios: Array<FuncionariosDTO> = [];

        let fun1 = {id:"1", nome:"Paulo"};
        let fun2 = {id:"2", nome:"Milena"};

        listFuncionarios.push(fun1);
        listFuncionarios.push(fun2);

        return listFuncionarios;
    }

}