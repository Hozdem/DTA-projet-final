import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MyUser } from './my-user';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  url = 'http://localhost:8091/api/MyUsers';
  bool:any;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })

  };

  constructor(private http: HttpClient, private router: Router) { }

  connexion(user: MyUser): boolean {
    this.http.post(this.url + '/connexion', user, this.httpOptions).subscribe(b => b?this.bool=true:this.bool=false);
    console.log(this.bool);
    return this.bool;
  }
}
