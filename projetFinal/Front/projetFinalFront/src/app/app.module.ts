import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { RouterModule, Routes, Route } from '@angular/router';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// primeNG
import { AccordionModule } from 'primeng/accordion';
import { PasswordModule } from 'primeng/password';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { TabMenuModule } from 'primeng/tabmenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';

import { AddUserReactiveFormComponent } from './add-user-reactive-form/add-user-reactive-form.component';
import { UpdateUserReactiveFormComponent } from './update-user-reactive-form/update-user-reactive-form.component';
import { ProduitDetailsComponent } from './produit-details/produit-details.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { MenuComponent } from './menu/menu.component';
import { ConnexionReactiveFormComponent } from './connexion-reactive-form/connexion-reactive-form.component';
import { ProduitComponent } from './produit/produit.component';
import { MenuReactiveFormComponent } from './menu-reactive-form/menu-reactive-form.component';
import { DeconnexionComponent } from './deconnexion/deconnexion.component';

const route: Routes =
  [
    { path: 'connexion', component: ConnexionReactiveFormComponent },
    { path: 'deconnexion', component: DeconnexionComponent },
    { path: 'addUser', component: AddUserReactiveFormComponent },
    { path: 'updateUser/:id', component: UpdateUserReactiveFormComponent },
    { path: 'deleteUser/:id', component: DeleteUserComponent },
    { path: 'produit', component: ProduitDetailsComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    ConnexionReactiveFormComponent,
    AddUserReactiveFormComponent,
    UpdateUserReactiveFormComponent,
    ProduitDetailsComponent,
    DeleteUserComponent,
    MenuComponent,
    ProduitComponent,
    ProduitDetailsComponent,
    MenuReactiveFormComponent,
    DeconnexionComponent
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
