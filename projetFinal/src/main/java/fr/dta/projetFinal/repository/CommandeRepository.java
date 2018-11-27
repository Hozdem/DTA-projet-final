package fr.dta.projetFinal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import fr.dta.projetFinal.model.Commande;

@Repository
@Transactional
public interface CommandeRepository extends JpaRepository<Commande, Long>{

}
