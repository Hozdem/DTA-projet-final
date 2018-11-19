import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Produit } from './produit';
import { Observable, of } from 'rxjs';
import { MyUser } from './my-user';

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

  allGenres()
  {
    return this.http.get(this.url + '/allGenres', this.httpOptions);
  }

  allSupports()
  {
    return this.http.get(this.url + '/allSupports', this.httpOptions);
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
    this.http.put(this.url + '/updateProduit',prod, this.httpOptions).subscribe(() => this.router.navigate(['/']));
  }
  
  deleteProduit(id: number)
  {
    this.http.delete(this.url + '/deleteProduit/' + id, this.httpOptions).subscribe(() => this.router.navigate(['/']));
  }

}
