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
    password: ['', Validators.required]
  });


  constructor(private fb: FormBuilder, private serviceUser: UserService) { 
  }

  ngOnInit() {
  }

  onSubmit()
  {
        // en cas d'ajout
    this.serviceUser.addUser(new MyUser(this.userForm.value.login, this.userForm.value.password));
  }
}
