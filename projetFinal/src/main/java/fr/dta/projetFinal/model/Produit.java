package fr.dta.projetFinal.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

@Entity
public class Produit {
	@Id
	@GeneratedValue
	private long id;

	@Column
	private String titre;

	@Column
	@ElementCollection(targetClass = String.class)
	private List<String> genres = new ArrayList<String>();

	@Column
	private String support;

	@Column
	private Date dateSortie;

	@Column
	private float prix;

	@Column
	private String lienImage;

	@Column
	private String editeur;

	@Column
	private String description;

	public Produit() {

	}
	
	public Produit(String nom, List<String> genres, String support, Date dateSortie, float prix, String lienImage, String editeur, String description) {
		super();
		this.titre = nom;
		this.genres = genres;
		this.support = support;
		this.dateSortie = dateSortie;
		this.prix = prix;
		this.lienImage = lienImage;
		this.editeur = editeur;
		this.description = description;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNom() {
		return titre;
	}

	public void setNom(String nom) {
		this.titre = nom;
	}

	public List<String> getGenres() {
		return genres;
	}

	public void setGenres(List<String> genres) {
		this.genres = genres;
	}

	public String getSupport() {
		return support;
	}

	public void setSupport(String support) {
		this.support = support;
	}

	public Date getDateSortieProd() {
		return dateSortie;
	}

	public void setDateSortieProd(Date dateSortieProd) {
		this.dateSortie = dateSortieProd;
	}

	public float getPrixProd() {
		return prix;
	}

	public void setPrixProd(float prixProd) {
		this.prix = prixProd;
	}

	public String getLienImage() {
		return lienImage;
	}

	public void setLienImage(String lienImage) {
		this.lienImage = lienImage;
	}

	public String getEditeur() {
		return editeur;
	}

	public void setEditeur(String editeur) {
		this.editeur = editeur;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getTitre() {
		return titre;
	}

	public void setTitre(String titre) {
		this.titre = titre;
	}

	public Date getDateSortie() {
		return dateSortie;
	}

	public void setDateSortie(Date dateSortie) {
		this.dateSortie = dateSortie;
	}

	public float getPrix() {
		return prix;
	}

	public void setPrix(float prix) {
		this.prix = prix;
	}

	@Override
	public String toString() {
		return "Produit [id=" + id + ", nom=" + titre + ", genres=" + genres + ", support=" + support
				+ ", dateSortieProd=" + dateSortie + ", prixProd=" + prix + ", lienImage=" + lienImage
				+ ", editeur=" + editeur + ", description=" + description + "]";
	}
}
