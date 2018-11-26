import { Component} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from './produit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'projetFinalFront';

  menuGlobal: MenuItem[];
  pageActuel: MenuItem;

  searchForm = this.fb.group({
    titre:['']
  });

  constructor(private fb: FormBuilder,private activatedRoute: ActivatedRoute,private service: ProduitService, private route:Router) { 
  }



  ngOnInit() {
    this.menuGlobal = [
      { label: 'Accueil', url: '/'},
      { label: 'Produit', url: '/produit' },
      { label: 'Panier'}
    ];
    /*if(this.activatedRoute.snapshot.url.length === 0)
    {
      // on est sur la page d'accueil
      this.pageActuel = this.menuGlobal[0];
    }
    else
    {
      if(this.activatedRoute.snapshot.url[0].path === 'produit')
      {
          // on est dans la recherche de produit
          this.pageActuel = this.menuGlobal[1];
      }
      else
      {
        /*
        if(this.activatedRoute.snapshot.url[0].path === 'panier')
        {
            // on est dans la recherche de produit
            this.pageActuel = this.menuGlobal[1];
        }
      }
    }*/
  }
}

