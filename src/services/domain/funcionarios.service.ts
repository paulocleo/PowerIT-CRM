import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FuncionariosDTO } from "../../models/funcionarios.dto";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs/Rx";
import { FuncionariosExemploDTO } from "../../models/funcionarioexemplo.dto";
import { FuncionariosResponseDTO } from "../../models/funcionariosresponse.dto";

@Injectable()
export class FuncionariosService {

    constructor(public http: HttpClient) {

    }

    findAll() : Observable<FuncionariosResponseDTO[]>{
        return this.http.get<FuncionariosResponseDTO[]>(`${API_CONFIG.baseUrl}/Funcionarios/Get_Funcionarios`);
    }

    fingAllExemplo() : Observable<FuncionariosExemploDTO[]>{
        return this.http.get<FuncionariosExemploDTO[]>("https://dummy.restapiexample.com/api/v1/employees");
    }
      
    /*findAllFuncionarios() : Array<FuncionariosDTO>{

        let listFuncionarios: Array<FuncionariosDTO> = [];

        let fun1 = {id:"1", nome:"Paulo"};
        let fun2 = {id:"2", nome:"Milena"};
        let fun3 = {id:"3", nome:"Duda"};

        listFuncionarios.push(fun1);
        listFuncionarios.push(fun2);
        listFuncionarios.push(fun3);

        return listFuncionarios;
    }*/

}