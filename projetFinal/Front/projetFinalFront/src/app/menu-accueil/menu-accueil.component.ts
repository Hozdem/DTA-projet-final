import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";
import { ProduitService } from '../produit.service';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-menu-accueil',
  templateUrl: './menu-accueil.component.html',
  styleUrls: ['./menu-accueil.component.css']
})
export class MenuAccueilComponent implements OnInit {
  
  items: MenuItem[];
  itemTmp = [];
  compteur = 0;
  constructor(private service: ProduitService) { }
  
  ngOnInit() {
    this.items = [];

    this.service.allSupports().subscribe( s => {
      for(let value of Object.values(s))
      {
        this.itemTmp.push({label: value, command: (onclick) => this.onClick(value)});
      }

      this.items = [{
        label: 'Supports',
        items: this.itemTmp
      }];

      this.service.allGenres().subscribe( g => {
        this.itemTmp = [];
        for(let value of Object.values(g))
        {
          this.itemTmp.push({label: value, url:'genres/'+value});
        }

        this.items.push({
          label: 'Genres',
          items: this.itemTmp
        });
      });
    });
  }

  onClick(nom: string){
    console.log(nom);
  }
}
