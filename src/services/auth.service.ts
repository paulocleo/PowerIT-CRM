import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "../config/api.config";
import { CredenciaisDTO } from "../models/credenciais.dto";

@Injectable()
export class AuthService {

    constructor(public http:HttpClient){

    }
    
    authenticate(creds : CredenciaisDTO){
        
        //User temporario
        if(creds.username == "admin" && creds.password == "123")
        {
            return true;
        }else{
            return false;
        }   
        
        
        
        /*return this.http.post(`${API_CONFIG.baseUrl}/login`,
            creds,
            {
                observe: 'response',
                responseType: 'text'
            });*/
    }

}