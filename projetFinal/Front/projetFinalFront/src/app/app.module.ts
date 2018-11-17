import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { RouterModule, Routes, Router} from '@angular/router';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';

// primeNG
import {AccordionModule} from 'primeng/accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PasswordModule} from 'primeng/password';
import {InputMaskModule} from 'primeng/inputmask';
import { ProduitComponent } from './produit/produit.component';
import {DropdownModule} from 'primeng/dropdown';
import {TabMenuModule} from 'primeng/tabmenu';
import {PanelMenuModule} from 'primeng/panelmenu';
import { ConnexionReactiveFormComponent } from './connexion-reactive-form/connexion-reactive-form.component';
import {ButtonModule} from 'primeng/button';

import { AddUserReactiveFormComponent } from './add-user-reactive-form/add-user-reactive-form.component';
import { UpdateUserReactiveFormComponent } from './update-user-reactive-form/update-user-reactive-form.component';
import { ProduitDetailsComponent } from './produit-details/produit-details.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { MenuComponent } from './menu/menu.component';

const route: Routes = 
[
  {path: 'connexion', component: ConnexionReactiveFormComponent},
  {path: 'addUser', component: AddUserReactiveFormComponent},
  {path: 'updateUser/:id', component: UpdateUserReactiveFormComponent},
  {path: 'deleteUser/:id', component: DeleteUserComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ConnexionReactiveFormComponent,
    AddUserReactiveFormComponent,
    UpdateUserReactiveFormComponent,
    ProduitDetailsComponent,
    DeleteUserComponent,
    MenuComponent
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
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
