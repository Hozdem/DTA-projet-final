import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestion-user-reactive-form',
  templateUrl: './gestion-user-reactive-form.component.html',
  styleUrls: ['./gestion-user-reactive-form.component.css']
})
export class GestionUserReactiveFormComponent implements OnInit {
  
  
  roleForm = this.fb.group({
    admins: [null],
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
