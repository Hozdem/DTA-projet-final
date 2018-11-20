package fr.dta.projetFinal.repository;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
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

		Predicate titrePredicate = builder.and();
		Predicate genrePredicate = builder.and();
		Predicate supportPredicate = builder.and();
				
		if (titre != null && !StringUtils.isEmpty(titre)) {
			titrePredicate = builder.like(builder.upper(root.get("titre")), "%" + titre.toUpperCase() + "%");
		}

		if (genres != null && !genres.isEmpty()) {
			List<Predicate> genresRestriction = new ArrayList<>();
			for (String genre : genres) {
				genresRestriction.add(builder.isMember(genre, root.get("genres")));
			}
			genrePredicate = builder.or(genresRestriction.toArray(new Predicate[genresRestriction.size()]));
		}
		
		if (supports != null && !supports.isEmpty()) {
			List<Predicate> supportsPredicate = new ArrayList<>();
			for (String support : supports) {
				supportsPredicate.add(builder.equal(root.get("support"), support));
			}
			supportPredicate = builder.or(supportsPredicate.toArray(new Predicate[supportsPredicate.size()]));
		}
		
		query.where(builder.and(
				titrePredicate,
				genrePredicate,
				supportPredicate
			));

		TypedQuery<Produit> userQuery = em.createQuery(query);

		return userQuery.getResultList();
	}

	@Autowired
	public void setJpaContext(JpaContext jpaContext) {
		em = jpaContext.getEntityManagerByManagedType(Produit.class);
	}

}
