import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RegistroComponent } from "../app/registro/registro.component"
import { nuevoUser } from "./registro/registro";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { LoginService } from "./login/login.service";



@Injectable()
export class DataServices {

    constructor(private httpClient: HttpClient, private loginService:LoginService) {}

    cargarUsuarios(){
        const token = this.loginService.getIdToken()
        return this.httpClient.get('https://refreshing-glow-358410-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth='+ token)
    }

    guardarUsuarios(listaUsuarios:nuevoUser[]) {
        
        this.httpClient.post('https://refreshing-glow-358410-default-rtdb.europe-west1.firebasedatabase.app/datos.json', listaUsuarios).subscribe(
        response=> {
                return console.log('Se han guardado los usuarios' + response);
            },
        error=> {
            return console.log('Error: ' + error);
        }
        
        )
    }

}