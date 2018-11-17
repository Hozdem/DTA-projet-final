import { Injectable } from '@angular/core';
import { MyUser } from './my-user';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

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
    this.http.post(this.url + '/addMyUser',user, this.httpOptions).subscribe(() => this.router.navigate(['/']));
  }

  updateUser(user: MyUser)
  {
    this.http.put<MyUser>(this.url +'/updateMyUser/' ,user,  this.httpOptions).subscribe(() => this.router.navigate(['/']));
  }

  deleteUser(id: number)
  {
    this.http.delete<MyUser>(this.url +'/deleteMyUser/' + id,  this.httpOptions).subscribe(() => this.router.navigate(['/']));
  }

  verifierLoginAndPassword(id: number, password: string): Observable<Object>
  {
    return this.http.post(this.url + '/connexionAuto/' + id,password,  this.httpOptions);
  }

  verifierPassword(passwordKey: string, passwordConfirmationKey: string)
  {
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
