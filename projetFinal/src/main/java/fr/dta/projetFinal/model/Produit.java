package fr.dta.projetFinal.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

import fr.dta.projetFinal.enums.EnumGenres;
import fr.dta.projetFinal.enums.EnumSupports;

@Entity
public class Produit {
	@Id
	@GeneratedValue
	private long id;

	@Column
	private String nomProd;

	@Column
	@ElementCollection(targetClass = String.class)
	private List<String> genreProd = new ArrayList<String>();

	@Column
	private String supportProd;

	@Column
	private Date dateSortieProd;

	@Column
	private float prixProd;

	@Column
	private String lienImage;

	@Column
	private String editeur;

	@Column
	private String description;

	public Produit() {

	}
	
	public Produit(String nom, List<String> genres, String support, Date dateSortieProd, float prixProd, String lienImage, String editeur, String description) {
		super();
		this.nomProd = nom;
		this.genreProd = genres;
		this.supportProd = support;
		this.dateSortieProd = dateSortieProd;
		this.prixProd = prixProd;
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
		return nomProd;
	}

	public void setNom(String nom) {
		this.nomProd = nom;
	}

	public List<String> getGenres() {
		return genreProd;
	}

	public void setGenres(List<String> genres) {
		this.genreProd = genres;
	}

	public String getSupport() {
		return supportProd;
	}

	public void setSupport(String support) {
		this.supportProd = support;
	}

	public Date getDateSortieProd() {
		return dateSortieProd;
	}

	public void setDateSortieProd(Date dateSortieProd) {
		this.dateSortieProd = dateSortieProd;
	}

	public float getPrixProd() {
		return prixProd;
	}

	public void setPrixProd(float prixProd) {
		this.prixProd = prixProd;
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

	@Override
	public String toString() {
		return "Produit [id=" + id + ", nom=" + nomProd + ", genres=" + genreProd + ", support=" + supportProd
				+ ", dateSortieProd=" + dateSortieProd + ", prixProd=" + prixProd + ", lienImage=" + lienImage
				+ ", editeur=" + editeur + ", description=" + description + "]";
	}
}
