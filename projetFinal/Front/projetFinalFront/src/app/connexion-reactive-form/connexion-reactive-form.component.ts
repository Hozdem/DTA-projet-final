import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConnexionService } from '../connexion.service';
import { MyUser } from '../my-user';

@Component({
  selector: 'app-connection-reactive-form',
  templateUrl: './connexion-reactive-form.component.html',
  styleUrls: ['./connexion-reactive-form.component.css']
})
export class ConnexionReactiveFormComponent implements OnInit {

  userForm = this.fb.group({
    login: [''],
    password: ['']
  });


  constructor(private fb: FormBuilder, private co: ConnexionService) { }

  ngOnInit() {

  }

  onSubmit(){
    let user = new MyUser(this.userForm.value.login , this.userForm.value.password, 'ROLE_USER', 'nom', 'prenom','email', 'adresse', 'ville', '12345');
    this.co.connexion(user);
  }

}
