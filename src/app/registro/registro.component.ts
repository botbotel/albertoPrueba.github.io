import { Component, OnInit } from '@angular/core';
import { nuevoUser } from './registro';
import { Router, TitleStrategy } from '@angular/router';
import { ModuleTeardownOptions } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { DataServices } from '../data.services';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {



/** 
 * CONSTRUCTOR DE ROUTER
**/
  constructor(private router:Router, private dataServices:DataServices){ 
    this.router.navigate(['/registro'])
  }

/** 
 * GETTER Y SETTER DE CLASDE NUEVOUSER
**/

public set usur(_model: nuevoUser) {
this._model = new nuevoUser(nuevoUser.setNombre, nuevoUser.setApellido, nuevoUser.setEmail, nuevoUser.setPassword)
}

  public _model = new nuevoUser(nuevoUser.setNombre, nuevoUser.setApellido, nuevoUser.setEmail, nuevoUser.setPassword);
  public get model() {
    return this._model;
  }


  
/**
* 
* FUNCTION @ONSUBMIT RECIBE FORMULARIO DE HTML
* LEE SI EL USUARIO ES EXISTENTE
* SI NO ES EXISTENTE LO CREA MEDIANTE EL .VALUE DE FORM
* POR ÚLTIMO MANDA USUARIO CREADO A 
* FUNCION @REGISTRO  
* PARA QUE @REGISTRO GUARDE EN BBDD
*/
  submitted = false;
  onSubmit(form: NgForm) { 
    var mensaje:string = ""
    if (listaUsuarios) {
        mensaje = "Usuario ya existente"
    } else {
      var nombre = this._model.setNombre(form.value.nombre.trim())
      var apellido = this._model.setApellido(form.value.apellido.trim())
      var email = this._model.setEmail(form.value.email.trim())
      var password = this._model.setPassword(form.value.password.trim())

      this.registro(nombre, apellido, email, password)
      mensaje = "Usuario creado satisfactoriamente"
    }
}
  
/** 
* @REGISTRO RECIBE ARGUMENTOS DE @ONSUBMIT 
* INSTANCIA EL USUARIO NUEVO
* LO CARGA EN EL ARRAY Y A SU VEZ EN LA BASE DE DATOS
**/
registro(nombre:string, apellido:string, email:string, password:string){

  const usuario_nuevo:nuevoUser =  new nuevoUser(nombre, apellido, email, password) 
    alert('Se va a crear el nuevo usuario:\n' + 'Nombre: '+ usuario_nuevo.nombre + "\nApellido: " + usuario_nuevo.apellido + '\nEmail: ' + usuario_nuevo.email + '\nContraseña: ' + usuario_nuevo.password)
    listaUsuarios.push(usuario_nuevo)
    this.dataServices.guardarUsuarios(listaUsuarios)
    alert('Usuario creado correctamente!!!')

  }
  get diagnostic() { return JSON.stringify(this.model); }
  }

/** 
* ALMACENAMIENTO DE USUARIOS CREADOS 
**/
const listaUsuarios:nuevoUser[] = [
  
]






