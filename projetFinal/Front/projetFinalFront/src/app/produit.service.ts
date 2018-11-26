import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Produit } from './produit';
import { MyUser } from './my-user';
import { TestBed } from '@angular/core/testing';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})

export class ProduitService {
  url = 'http://localhost:8091/api/Produits';

  headers: HttpHeaders = new HttpHeaders({ 'Content-type': 'application/json' });
  httpOptions = { headers: this.headers };

  constructor(private http: HttpClient, private router: Router) {

  }

  getProduit(id: number): Observable<Produit> {
    return this.http.get<Produit>(this.url + '/' + id, this.httpOptions);
  }

  allGenres() {
    return this.http.get(this.url + '/allGenres', this.httpOptions);
  }

  allSupports() {
    return this.http.get(this.url + '/allSupports', this.httpOptions);
  }

  getAllProduit() {
    return this.http.get(this.url + '/', this.httpOptions);

  }

  addProduit(prod: Produit) {
    this.http.post(this.url + '/addProduit', prod, this.httpOptions).subscribe(() => this.router.navigate(['/']));
  }

  // Après validation du formulaire de la page 'updateProduit', redirection vers l'accueil.
  updateProduit(prod: Produit) {
    this.http.put(this.url + '/updateProduit', prod, this.httpOptions).subscribe(() => this.router.navigate(['/']));
  }

  deleteProduit(id: number) {
    this.http.delete(this.url + '/deleteProduit/' + id, this.httpOptions).subscribe(() => this.router.navigate(['/']));
  }

  searchProduit(titre?: string, genres?: Array<string>, supports?: Array<string>) {
    let parameters = new HttpParams();
    if (!isNullOrUndefined(titre))
    parameters = parameters.set("titre", titre);

    for (let index in supports) {
      if (!isNullOrUndefined(supports[index])) {
        parameters = parameters.append("supports", supports[index]);
      }
    }

    for (let index in genres) {
      if (!isNullOrUndefined(genres[index])) {
        parameters = parameters.append("genres", genres[index]);
      }
    }
    
    return this.http.get<Array<Produit>>(this.url + '/search', {
      headers: this.headers,
      params: parameters
    });
  
  }
  
  getAllPathPictures()
  {
    return this.http.get<Array<string>>(this.url + '/allPicturesPath', this.httpOptions);
  }

}
