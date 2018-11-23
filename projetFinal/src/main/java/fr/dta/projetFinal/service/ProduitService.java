package fr.dta.projetFinal.service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

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
		return produitRepository.findByGenres(genres);
	}
	
	// retourne vrai si la sauvegarde a reussi sinon faux
	public boolean sauvegarderImage(MultipartFile f) throws IOException
	{
		FileOutputStream sortie = null;
		try 
		{
			File file = new File("./Front/projetFinalFront/src/assets/images/raw/uploaded/" + f.getOriginalFilename());
			sortie = new FileOutputStream(file);
			sortie.write(f.getBytes());
			return true;
		}catch(Exception e)
		{
			e.printStackTrace();
		}
		finally
		{
			sortie.close();
		}
		return false;
	}

	public String[] getAllPathPictures()
	{
		File f = new File("./Front/projetFinalFront/src/assets/images/raw/uploaded/");
		
		return f.list();
	}
}
