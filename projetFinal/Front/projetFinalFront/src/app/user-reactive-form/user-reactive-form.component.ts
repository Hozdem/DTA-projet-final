import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MyUser } from '../my-user';
import { UserService } from '../user.service';
import {SelectItem} from 'primeng/api';
import { Password } from 'primeng/password';
import { EmailValidator } from '@angular/forms'; 


interface Role {
  name: string;
}

@Component({
  selector: 'app-user-reactive-form',
  templateUrl: './user-reactive-form.component.html',
  styleUrls: ['./user-reactive-form.component.css']
})




export class UserReactiveFormComponent implements OnInit {
  userForm = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
    verificationPassword: [''],
		role: [{name: "ROLE_USER"}],
		nom: ['', Validators.required],
		prenom: ['', Validators.required],
		email: ['', Validators.required],
		adresse: ['', Validators.required],
		ville: ['', Validators.required],
		codePostal: ['', Validators.required],
		numTel: ['']
  }, {validator: this.verifierPassword('password', 'verificationPassword')});
  
  
  
  roles : SelectItem[];
  
  constructor(private fb: FormBuilder, private serviceUser: UserService) { 
    this.roles = [
      {label: "ROLE_USER", value: {id: 1, name:"ROLE_USER"}},
      {label: "ROLE_ADMIN", value: {id: 2, name:"ROLE_ADMIN"}}
    ];
  }
  
  ngOnInit() {
  }
  
  onSubmit()
  {
      // en cas d'ajout
      let leRole = this.userForm.value.role.name;
      console.log(leRole);
      let user = new MyUser(this.userForm.value.login, this.userForm.value.password, leRole, this.userForm.value.nom
        , this.userForm.value.prenom, this.userForm.value.email, this.userForm.value.adresse, this.userForm.value.ville
        , this.userForm.value.codePostal, this.userForm.value.numTel);
        this.serviceUser.addUser(user);
  }

  verifierPassword(passwordKey: string, passwordConfirmationKey: string)
  {
    console.log('entree');
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
          passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      }
      else {
          return passwordConfirmationInput.setErrors(null);
      }
    }
  }
}
