import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})

export class ProduitComponent implements OnInit
{

  constructor(private route: ActivatedRoute)
  { 

  }

  ngOnInit()
  {
    
  }

}
