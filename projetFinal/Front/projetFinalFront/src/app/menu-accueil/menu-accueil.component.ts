import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";
import { ProduitService } from '../produit.service';
import { ListeProduitsService } from '../liste-produits.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-accueil',
  templateUrl: './menu-accueil.component.html',
  styleUrls: ['./menu-accueil.component.css']
})
export class MenuAccueilComponent implements OnInit {

  items: MenuItem[];
  itemTmp = [];
  constructor(private service: ProduitService, private listeProduitsService: ListeProduitsService, private route: Router) { }

  ngOnInit() {
    this.items = [];

    this.service.allSupports().subscribe(s => {
      for (let value of Object.values(s)) {
        this.itemTmp.push({ label: value, command: (onClick) => this.searchSupport(value)});
      }

      this.items = [{
        label: 'Supports',
        items: this.itemTmp
      }];

      this.service.allGenres().subscribe(g => {
        this.itemTmp = [];
        for (let value of Object.values(g)) {
          this.itemTmp.push({ label: value , command: (onClick) => this.searchGenre(value)});
        }

        this.items.push({
          label: 'Genres',
          items: this.itemTmp
        });
      });
    });
  }

  searchSupport(value: string) {
    this.service.searchProduit('', [], [value]).subscribe(p => {
      this.listeProduitsService.setProduits(p);
      this.route.navigate(['produit']);
    })
  }

  searchGenre(value: string) {
    this.service.searchProduit('', [value], []).subscribe(p => {
      this.listeProduitsService.setProduits(p);
      this.route.navigate(['produit']);
    })
  }
}
