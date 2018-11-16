import { Injectable } from '@angular/core';
import { MyUser } from './my-user';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:8091/api/MyUsers';

  httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
    
  };
  constructor(private http: HttpClient, private router: Router) { }

  addUser(user: MyUser)
  {
    this.http.post(this.url + '/addMyUser',user, this.httpOptions).subscribe(() => this.router.navigate(['/addUser']));
  }

  updateRace(user: MyUser)
  {
    this.http.put<MyUser>(this.url +'/updateMyUser/' ,user,  this.httpOptions).subscribe(() => this.router.navigate(['/']));
  }
}
