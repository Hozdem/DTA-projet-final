package fr.dta.projetFinal.repository;

import java.util.List;

import fr.dta.projetFinal.model.Produit;

public interface ProduitRepositoryCustom {
	public List<Produit> search(String titre, List<String> genres, List<String> supports);
}
