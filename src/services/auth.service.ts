import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "../config/api.config";
import { CredenciaisDTO } from "../models/credenciais.dto";
import { LocalUser } from "../models/local_user";
import { StorageService } from "./storage.service";

@Injectable()
export class AuthService {

    constructor(public http:HttpClient, public storageService:StorageService){

    }
    
    authenticate(creds : CredenciaisDTO){
        
        //User temporario
        if(creds.username == "admin" && creds.password == "123")
        {
            this.sucessfulLogin(creds.username);
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

    sucessfulLogin(mail: string){
        let usr : LocalUser = {
            email: mail
        }

        this.storageService.setLocalUser(usr);
    }

    logout(){
        this.storageService.setLocalUser(null);
    }

}