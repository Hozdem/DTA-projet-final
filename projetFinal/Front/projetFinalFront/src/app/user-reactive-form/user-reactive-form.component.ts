import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MyUser } from '../my-user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-reactive-form',
  templateUrl: './user-reactive-form.component.html',
  styleUrls: ['./user-reactive-form.component.css']
})
export class UserReactiveFormComponent implements OnInit {
  userForm = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
		role: ['', Validators.required],
		nom: ['', Validators.required],
		prenom: ['', Validators.required],
		email: ['', Validators.required],
		adresse: ['', Validators.required],
		ville: ['', Validators.required],
		codePostal: ['', Validators.required],
		numTel: ['']
  });


  constructor(private fb: FormBuilder, private serviceUser: UserService) { 
  }

  ngOnInit() {
  }

  onSubmit()
  {
        // en cas d'ajout
    let user = new MyUser(this.userForm.value.login, this.userForm.value.password, this.userForm.value.role, this.userForm.value.nom
          , this.userForm.value.prenom, this.userForm.value.email, this.userForm.value.adresse, this.userForm.value.ville
          , this.userForm.value.codePostal, this.userForm.value.numTel);
    this.serviceUser.addUser(user);
  }
}
