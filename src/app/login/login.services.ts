import { Injectable } from "@angular/core";
import { InjectSetupWrapper } from "@angular/core/testing";
import { Router } from "@angular/router";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import { DataServices } from "../data.services";


/**
 * INJECTABLE DEL LOGIN
 * HACE UNA PROMESA DE QUE CUANDO UN USUARIO
 * HAGA LOGIN DEVUELVE EL TOKEN
 * Y REDIRECCIONA A LA PÁGINA INDICADA
 */
@Injectable()
export class LoginService {
    constructor(private router:Router, private dataService:DataServices){}

    token!: string;

    loginBD(email:string, password:string) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
            _response => {
                firebase.auth().currentUser?.getIdToken().then(
                    token => {
                        this.token=token;
                        this.router.navigate(["../area-log"])
                    }
                )
            }
        )
    }
    getIdToken(){
        return this.token
    }

}