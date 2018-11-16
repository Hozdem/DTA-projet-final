import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MyUser } from './my-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  url = 'http://localhost:8091/api/MyUsers';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })

  };

  bool: any;
  constructor(private http: HttpClient, private router: Router) { }

  connexion(user: MyUser) : Observable<Object>{

    return this.http.post(this.url + '/connexion', user, this.httpOptions);
  }
}
