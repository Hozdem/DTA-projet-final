import { Produit } from "./produit";

export class Commande {
    
	id: number;
    date: Date;
    produits: Array<Produit>;
	
	public Commande(id?: number, date?: Date, produits?: Array<Produit>) {
		this.id = id === undefined?0: id;
		this.date = date === undefined? new Date(): date;
		this.produits = produits === undefined? []: produits;
	}
}
