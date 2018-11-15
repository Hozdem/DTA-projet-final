import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { RouterModule, Routes, Router} from '@angular/router';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { UserReactiveFormComponent } from './user-reactive-form/user-reactive-form.component';

import {HttpClientModule} from '@angular/common/http';

const route: Routes = 
[
  {path: 'addUser', component: UserReactiveFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(route),
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
