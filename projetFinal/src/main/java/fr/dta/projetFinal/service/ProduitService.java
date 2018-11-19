package fr.dta.projetFinal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.dta.projetFinal.model.Produit;
import fr.dta.projetFinal.repository.ProduitRepository;

@Service
public class ProduitService {
	@Autowired
	ProduitRepository produitRepository;
	
	public List<Produit> findAll()
	{
		return (List<Produit>) produitRepository.findAll();
	}
	
	public Produit findById(long id)
	{
		Optional<Produit> option = produitRepository.findById(id); 
		if(option.isPresent())
		{
			return option.get();
		}
		else
		{
			System.out.println("objet non trouvé en base de donnée");
			return null;
		}
	}
	
	public void insertProduit(Produit produit)
	{
		produitRepository.save(produit);
	}
	
	public void updateProduit(Produit produit)
	{
		produitRepository.save(produit);
	}
	
	public  void deleteProduitById(long id)
	{
		produitRepository.deleteById(id);
	}

	public List<Produit> findByGenres(List<String> genres) {
		return produitRepository.findByGenreProd(genres);
	}
}
