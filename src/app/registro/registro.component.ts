import { Component, OnInit } from '@angular/core';
import { nuevoUser } from './registro';
import { Router } from '@angular/router';
import { ModuleTeardownOptions } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { DataServices } from '../data.services';


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

  public _model = new nuevoUser(nuevoUser.getNombre, nuevoUser.getApellido, nuevoUser.getEmail, nuevoUser.getPassword);
  public get model() {
    return this._model;
  }


  
/**
* 
* @FUNCTION ONSUBMIT() RECIBE FORMULARIO DE HTML
* LEE SI EL USUARIO ES EXISTENTE
* SI NO ES EXISTENTE LO CREA MEDIANTE EL .VALUE DE FORM
* POR ÚLTIMO MANDA USUARIO YA EXISTENTE A 
* FUNCION @REGISTRO()  
*/
  submitted = false;
  onSubmit(form: NgForm) { 
    var mensaje:string = ""
    if (listaUsuarios) {
        mensaje = "Usuario ya existente"
    } else {
      var nombre:string = form.value.nombre.trim()
      var apellido:string = form.value.apellido.trim()
      var email:string = form.value.email.trim()
      var password:string = form.value.password.trim()

      this.registro(nombre, apellido, email, password)
      mensaje = "Usuario creado satisfactoriamente"
    }
    alert(mensaje)
    alert('PASO 1 COMPLETADO')
}
  
/** 
* APOYO A FUNCION ONSUBMIT EN CASO DE QUE EL USUARIO NO ESTÉ CREADO
**/
registro(nombre:string, apellido:string, email:string, password:string){

  var user = nombre + " " + apellido + " " + email + " " + password  
  try {
    listaUsuarios.push(this._model)
    this.dataServices.guardarUsuarios(listaUsuarios)
    alert("Usuario añadido correctamente")
  }catch {
  }finally {
    alert('Usuario guardado correctamente: ' + this._model.getNombre)

  }
};

  get diagnostic() { return JSON.stringify(this.model); }
  }

/** 
* ALMACENAMIENTO DE USUARIOS CREADOS 
**/
var listaUsuarios: nuevoUser[] = []



