import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  constructor(private serviceUser: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id: number = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.serviceUser.deleteUser(id);
  }
}
