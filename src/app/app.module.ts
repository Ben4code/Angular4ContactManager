import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { SandboxComponent } from './sandbox/sandbox/sandbox.component';
import { Sandbox2Component } from './sandbox/sandbox2/sandbox2.component';

import { DataService } from './services/data.service';
import { HomeComponent } from './sandbox/home/home.component';
import { AboutComponent } from './sandbox/about/about.component';
import { NavbarComponent } from './sandbox/navbar/navbar.component';

const appRoutes: Routes = [
      {path:'', component:Sandbox2Component},
      {path:'about', component:AboutComponent},
      {path:'contact', component:SandboxComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    Sandbox2Component,
    HomeComponent,
    AboutComponent,
    NavbarComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
