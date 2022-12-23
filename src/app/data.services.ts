import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RegistroComponent } from "../app/registro/registro.component"
import { nuevoUser } from "./registro/registro";




@Injectable()
export class DataServices {

    constructor(private httpClient: HttpClient) {}

    guardarUsuarios(listaUsuarios:nuevoUser[]) {
        
        this.httpClient.post('https://refreshing-glow-358410-default-rtdb.europe-west1.firebasedatabase.app/datos.json',listaUsuarios).subscribe(

        response=>console.log('Se han guardado los usuarios' + response),

        error=> console.log('Error: ' + error)
        
        )
    }

}