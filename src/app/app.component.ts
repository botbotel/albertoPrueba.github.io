import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import  firebase  from 'firebase/compat/app'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyDKLXoGWj-3tdvrEoRw_AhqSY0LGip8QPE",
      authDomain: "refreshing-glow-358410.firebaseapp.com"
    })
  }

}
