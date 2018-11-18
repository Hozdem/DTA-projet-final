import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Produit } from './produit';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProduitService
{
  url = 'http://localhost:8091/api/Produits';

  httpOptions = { headers: new HttpHeaders({'Content-type': 'application/json'}) };
  produits: Array<Produit>;

  constructor(private http: HttpClient, private router: Router)
  { 

  }

  getProduit(id: number): Observable<Produit>
  {
    return this.http.get<Produit>(this.url +'/' + id, this.httpOptions);
  }

  allEnums()
  {
    return this.http.get(this.url + '/allEnums', this.httpOptions).subscribe();
  }

  getAllProduit(): Observable<Array<Produit>>
  {
    return of(this.produits);
  }

  addProduit(prod: Produit)
  {
    this.http.post(this.url + '/addProduit',prod, this.httpOptions).subscribe(() => this.router.navigate(['/addProduit']));
  }

  // Après validation du formulaire de la page 'updateProduit', redirection vers l'accueil.
  updateProduit(prod: Produit)
  {
    this.http.post(this.url + '/updateProduit',prod, this.httpOptions).subscribe(() => this.router.navigate(['/']));
  }
  
  deleteProduit(prod: Produit)
  {
    this.http.post(this.url + '/deleteProduit',prod, this.httpOptions).subscribe(() => this.router.navigate(['/']));
  }
}
