import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Commande } from './commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeServiceService {
  url = 'http://localhost:8091/api/Commandes';

  headers: HttpHeaders = new HttpHeaders({ 'Content-type': 'application/json' });
  httpOptions = { headers: this.headers };

  constructor(private http: HttpClient, private router: Router) { }

  getAll()
  {
    return this.http.get(this.url + '/', this.httpOptions);
  }

  getById(id: number)
  {
    return this.http.get(this.url + "/" + id, this.httpOptions);
  }

  addCommande(commande: Commande)
  {
    return this.http.post(this.url + '/addCommande', commande, this.httpOptions);
  }

  updateCommande(commande: Commande)
  {
    return this.http.put(this.url + "/updateCommade", commande, this.httpOptions);
  }

  deleteCommande(id: number)
  {
    return this.http.delete(this.url + '/deleteCommande/' + id, this.httpOptions);
  }
}
