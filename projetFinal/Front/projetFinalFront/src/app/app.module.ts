import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { RouterModule, Routes, Router} from '@angular/router';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { UserReactiveFormComponent } from './user-reactive-form/user-reactive-form.component';

import {HttpClientModule} from '@angular/common/http';

// primeNG
import {AccordionModule} from 'primeng/accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PasswordModule} from 'primeng/password';
import {InputMaskModule} from 'primeng/inputmask';
import {DropdownModule} from 'primeng/dropdown';
import {TabMenuModule} from 'primeng/tabmenu';
import {PanelMenuModule} from 'primeng/panelmenu';
import {ChipsModule} from 'primeng/chips';
import {ButtonModule} from 'primeng/button';
import { ConnexionReactiveFormComponent } from './connexion-reactive-form/connexion-reactive-form.component';

const route: Routes = 
[
  {path: 'addUser', component: UserReactiveFormComponent},
  {path: 'connexion', component: ConnexionReactiveFormComponent},
  {path: 'updateUser/:id', component: UserReactiveFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserReactiveFormComponent,
    ConnexionReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(route),
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    AccordionModule,
    PasswordModule,
    InputMaskModule,
    DropdownModule,
    TabMenuModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    ChipsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
