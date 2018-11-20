package fr.dta.projetFinal.repository;

import java.util.Collection;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaContext;
import org.springframework.util.StringUtils;

import fr.dta.projetFinal.model.Produit;

public class ProduitRepositoryImpl implements ProduitRepositoryCustom {

private EntityManager em;
	
	@Override
	public List<Produit> search(String titre, List<String> genres, List<String> supports) {
		CriteriaBuilder builder = em.getCriteriaBuilder();
		CriteriaQuery<Produit> query = builder.createQuery(Produit.class);
		Root<Produit> root = query.from(Produit.class);
		
		if (titre != null && !StringUtils.isEmpty(titre)) {
			query.where(builder.like(root.get("titre"), "%" + titre + "%"));
		}
		if (genres !=null && !genres.isEmpty()) {
			for(String ge : genres) {
				query.where(builder.like(root.get("genres"), "%" + ge + "%"));
			}
		}
		if (supports !=null && !supports.isEmpty()) {
			for(String su : supports) {
				query.where(builder.like(root.get("supports"), "%" + su + "%"));
			}
		}
		if(titre != null && !StringUtils.isEmpty(titre) && genres !=null && !genres.isEmpty()) {
			query.select(query.from(Produit.class));
		}
		
		TypedQuery<Produit> userQuery = em.createQuery(query);
		
		return userQuery.getResultList();
	}
	
	@Autowired
	public void setJpaContext(JpaContext jpaContext) {
		em = jpaContext.getEntityManagerByManagedType(Produit.class);
	}

}
