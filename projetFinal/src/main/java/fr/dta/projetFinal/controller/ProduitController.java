package fr.dta.projetFinal.controller;


import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import fr.dta.projetFinal.enums.EnumGenres;
import fr.dta.projetFinal.enums.EnumSupports;
import fr.dta.projetFinal.model.Produit;
import fr.dta.projetFinal.repository.ProduitRepositoryCustom;
import fr.dta.projetFinal.service.ProduitService;


@RestController
@RequestMapping("/api/Produits")
public class ProduitController {

	@Autowired
	ProduitService produitService;
	
	@Autowired
	private ProduitRepositoryCustom produitRepository;
	
	@GetMapping("/")
	@CrossOrigin(origins = "*")
    public List<Produit> getAll()
	{
        return produitService.findAll();
    }
	
	@CrossOrigin(origins = "*")
	@GetMapping("/{id}")
    public Produit getById(@PathVariable long id)
	{
        return produitService.findById(id);
    }
	
	@CrossOrigin(origins = "*")
	@PostMapping("/addProduit")
	@Secured("hasRole('ROLE_ADMIN')")
    public void insertProduit(@RequestBody Produit produit)
	{
        produitService.insertProduit(produit);
    }
	
	@CrossOrigin(origins = "*")
	@PostMapping("/findByGenre")
    public List<Produit> findByGenre(@RequestBody List<String> genres)
	{
        return produitService.findByGenres(genres);
    }
	
	@CrossOrigin(origins = "*")
	@PutMapping("/updateProduit")
	@Secured("hasRole('ROLE_ADMIN')")
    public void updateProduit(@RequestBody Produit produit)
	{
		produitService.updateProduit(produit);
    }

	@CrossOrigin(origins = "*")
	@DeleteMapping("/deleteProduit/{id}")
	@Secured("ROLE_ADMIN")
    public void deleteProduit(@PathVariable long id)
	{
		produitService.deleteProduitById(id);
    }
	
	@CrossOrigin(origins = "*")
	@GetMapping("/allGenres")
    public List<String> allGenres()
	{
		return EnumGenres.getAllGenres();
    }
	
	@CrossOrigin(origins = "*")
	@GetMapping("/allSupports")
    public List<String> allSupports()
	{
		return EnumSupports.getAllSupports();
    }
	
	@CrossOrigin(origins = "*")
	@GetMapping("/allPicturesPath")
    public String[] allPicturesPath()
	{
		return this.produitService.getAllPathPictures();
    }

	@CrossOrigin(origins = "*")
	@PostMapping("/stocker/")
    public void stocker(@RequestParam MultipartFile file) {
		try {
			this.produitService.sauvegarderImage(file);
		} catch (IOException e) {
			e.printStackTrace();
		}
    }
	
	@CrossOrigin(origins = "*")
	@GetMapping("/search")
	public List<Produit> getProduits(
			@RequestParam(required = false) String titre,
			@RequestParam(required = false) List<String> genres,
			@RequestParam(required = false) List<String> supports) {
		//System.out.println("titre = "+titre+" genres = "+genres+" supports = "+supports);
		return produitRepository.search(titre, genres, supports);
	}
}

