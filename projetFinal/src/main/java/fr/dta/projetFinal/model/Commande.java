package fr.dta.projetFinal.model;

import java.util.Date;
import java.util.List;

import javax.persistence.*;

@Entity
public class Commande {

	@Id
	@GeneratedValue
	private long id;
	
	@Column
	private Date date;
	
	@Column
	@ManyToMany
	private List<Produit> produits;

	public Commande()
	{
		
	}
	
	public Commande(long id, Date date, List<Produit> produits) {
		super();
		this.id = id;
		this.date = date;
		this.produits = produits;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public List<Produit> getProduits() {
		return produits;
	}

	public void setProduits(List<Produit> produits) {
		this.produits = produits;
	}
	
	
	
	
}
