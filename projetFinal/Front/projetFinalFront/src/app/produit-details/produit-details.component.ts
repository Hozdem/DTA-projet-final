import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../produit';

@Component({
  selector: 'app-produit-details',
  templateUrl: './produit-details.component.html',
  styleUrls: ['./produit-details.component.css']
})
export class ProduitDetailsComponent implements OnInit
{
  @Input() produit: Produit;

  constructor()
  { 

  }

  ngOnInit()
  {
    
  }
}
