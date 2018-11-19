package fr.dta.projetFinal.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import fr.dta.projetFinal.model.Produit;

@Repository
@Transactional
public interface ProduitRepository extends CrudRepository<Produit, Long>{

	public List<Produit> findByGenres(List<String> genres);
}
