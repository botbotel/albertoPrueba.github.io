import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { RegistroComponent } from '../registro/registro.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  //CONSTRUCTOR DE ROUTER
  constructor(private router:Router){ 
    this.router.navigate(['/login'])
  }
}
  

