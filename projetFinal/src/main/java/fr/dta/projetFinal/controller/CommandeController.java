package fr.dta.projetFinal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.dta.projetFinal.model.Commande;
import fr.dta.projetFinal.service.CommandeService;

@RestController
@RequestMapping("/api/Commandes")
public class CommandeController {
	
	@Autowired
	CommandeService commandeService;

	@GetMapping("/")
	@CrossOrigin(origins = "*")
    public List<Commande> getAll()
	{
        return commandeService.findAll();
    }
	
	@CrossOrigin(origins = "*")
	@GetMapping("/{id}")
    public Commande getById(@PathVariable long id)
	{
        return commandeService.findById(id);
    }
	
	@CrossOrigin(origins = "*")
	@PostMapping("/addCommande")
    public void insertProduit(@RequestBody Commande commande)
	{
		commandeService.insert(commande);
    }
	
	@CrossOrigin(origins = "*")
	@PutMapping("/updateCommande")
    public void updateProduit(@RequestBody Commande commande)
	{
		commandeService.update(commande);
    }

	@CrossOrigin(origins = "*")
	@DeleteMapping("/deleteCommande/{id}")
    public void deleteProduit(@PathVariable long id)
	{
		commandeService.deleteById(id);
    }
}
