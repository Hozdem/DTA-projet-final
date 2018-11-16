import { Injectable } from '@angular/core';
import { MyUser } from './my-user';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:8091/api/MyUsers';

  httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
    
  };
  constructor(private http: HttpClient, private router: Router) { }

  getUser(id: number): Observable<MyUser>
  {
    return this.http.get<MyUser>(this.url +'/' + id, this.httpOptions);
  }

  addUser(user: MyUser)
  { 
    this.http.post(this.url + '/addMyUser',user, this.httpOptions).subscribe(() => this.router.navigate(['/addUser']));
  }

  updateRace(user: MyUser)
  {
    this.http.put<MyUser>(this.url +'/updateRace/',user,  this.httpOptions).subscribe(() => this.router.navigate(['/']));
  }
}
