import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { FormsModule } from '@angular/forms';
import { DataServices } from './data.services';
import { HttpClientModule } from '@angular/common/http'

const appRoutes:Routes= [
  {path:'', component: HomeComponentComponent},
  { path:'login', component: LoginComponent },
  { path:'registro', component: RegistroComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
