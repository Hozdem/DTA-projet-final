package fr.dta.projetFinal.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

import fr.dta.projetFinal.enums.EnumGenreProd;
import fr.dta.projetFinal.enums.EnumSupportProd;

@Entity
public class Produit
{
	@Id
	@GeneratedValue
	private long id;
	
	@Column
	private String nomProd;

	@ElementCollection
	@Column
	private List<String> genreProd = new ArrayList<>();

	@ElementCollection
	@Column
	private List<String> supportProd  = new ArrayList<>();
	
	@Column
	private Date dateSortieProd;
	
	@Column
	private float prixProd;

	public Produit()
	{
		
	}

	public long getId()
	{
		return id;
	}

	public void setId(long id)
	{
		this.id = id;
	}

	public String getNomProd()
	{
		return nomProd;
	}

	public void setNomProd(String nomProd)
	{
		this.nomProd = nomProd;
	}

	public List<String> getGenreProd()
	{
		return genreProd;
	}

	public void setGenreProd(List<String> genreProd)
	{
		this.genreProd = genreProd;
	}

	public List<String> getSuppProd()
	{
		return supportProd;
	}

	public void setSuppProd(List<String> suppProd)
	{
		this.supportProd = suppProd;
	}

	public Date getDateSortieProd()
	{
		return dateSortieProd;
	}

	public void setDateSortieProd(Date dateSortieProd)
	{
		this.dateSortieProd = dateSortieProd;
	}

	public float getPrixProd()
	{
		return prixProd;
	}

	public void setPrixProd(float prixProd)
	{
		this.prixProd = prixProd;
	}
	
	
	
}
