package fr.dta.projetFinal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.dta.projetFinal.model.Commande;
import fr.dta.projetFinal.model.Produit;
import fr.dta.projetFinal.repository.CommandeRepository;

@Service
public class CommandeService {
	@Autowired
	CommandeRepository commanderepository;
	
	public List<Commande> findAll()
	{
		return (List<Commande>) commanderepository.findAll();
	}
	
	public Commande findById(long id)
	{
		Optional<Commande> option = commanderepository.findById(id); 
		if(option.isPresent())
		{
			return option.get();
		}
		else
		{
			return null;
		}
	}
	

	public void insert(Commande commande)
	{
		commanderepository.save(commande);
	}
	
	public void update(Commande commande)
	{
		commanderepository.save(commande);
	}
	
	public void deleteById(long id)
	{
		commanderepository.deleteById(id);
	}
}
