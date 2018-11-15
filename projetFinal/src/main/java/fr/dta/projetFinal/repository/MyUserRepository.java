package fr.dta.projetFinal.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import fr.dta.projetFinal.model.MyUser;

@Repository
@Transactional
public interface MyUserRepository extends CrudRepository<MyUser, Long>
{
	
}
