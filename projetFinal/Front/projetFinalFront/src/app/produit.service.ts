import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Produit } from './produit';

@Injectable({
  providedIn: 'root'
})

export class ProduitService
{
  url = 'http://localhost:8091/api/Produit';

  httpOptions = { headers: new HttpHeaders({'Content-type': 'application/json'}) };
  constructor(private http: HttpClient, private router: Router)
  { 

  }

  addProduit(prod: Produit)
  {
    
  }
}
