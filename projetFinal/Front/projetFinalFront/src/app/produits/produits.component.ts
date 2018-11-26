import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';
import { SelectItem } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { promise } from 'protractor';
import { ListeProduitsService } from '../liste-produits.service';
import { empty } from 'rxjs';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})

export class ProduitsComponent implements OnInit
{

  produits: Array<Produit> = [];

  selectedProduit: Produit;

  displayDialog: boolean;

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  activated: boolean = false;

  constructor(private service: ProduitService, private router: Router, private activatedRoute: ActivatedRoute, private listeProduitsService: ListeProduitsService)
  { 

  }

  ngOnInit() {
    const titre: string = this.activatedRoute.snapshot.paramMap.get('titre') !== undefined ? this.activatedRoute.snapshot.paramMap.get('titre') : '';

    const genres: Array<string> = [];
    genres.push(this.activatedRoute.snapshot.paramMap.get('genres') !== undefined ? this.activatedRoute.snapshot.paramMap.get('genres') : '');

    const supports: Array<string> = [];
    supports.push(this.activatedRoute.snapshot.paramMap.get('supports') !== undefined ? this.activatedRoute.snapshot.paramMap.get('supports') : '');
   
    if (!this.getProduits()) {
      this.searchProduits(titre, genres, supports);
    }

    this.sortOptions = [
      { label: 'Tri alphabétique croissant', value: '!titre' },
      { label: 'Tri alphabétique décroissant', value: 'titre' },
      { label: 'Tri par support', value: 'support' }
    ];
  }

  searchProduits(titre: string, genres: string[], supports: string[]) {
    this.service.searchProduit(titre, genres, supports).subscribe(
      produits => {
        this.listeProduitsService.setProduits(produits);
      });
  }

  getProduits(): Produit[] {
    return this.listeProduitsService.getProduits();
  }

  selectProduit(event: Event, produit: Produit) {
    this.selectedProduit = produit;
    this.displayDialog = true;
    event.preventDefault();
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  onDialogHide()
  {
    this.selectedProduit = null;
  }

  onClickDetails()
  {
    this.router.navigate(['/']);
  }

  //TODO RAJOUTER TOUTES LES METHODES: MODIFICATION , SUPPRESSION , ACTIVATION/DESACTIVATION DU PRODUIT 

  modifierProduit()
  {

  }

  supprimerProduit()
  {

  }
  
  eventActivatedProduit()
  {

  }
}