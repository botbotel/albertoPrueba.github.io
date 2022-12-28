import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { RegistroComponent } from '../registro/registro.component';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  //CONSTRUCTOR DE ROUTER
  constructor(private router:Router, private loginService:LoginService){ 
    this.router.navigate(['/login'])
  }
  ngOnInit(): void {
    
  }

  /**
   * FUNCION @LOGIN RECIBE INFORMACIÓN DEL FORMULARIO
   * Y MANDA LA INFORMACIÓN AL ARCHIVO LOGINSERVICE
   * PARA VALIDAR EL LOGIN
   */
  login(form:NgForm) {
    const email = form.value.email
    const password = form.value.password
    this.loginService.loginBD(email, password)
    alert('Usuario logeado con exito')
  }
}
  

