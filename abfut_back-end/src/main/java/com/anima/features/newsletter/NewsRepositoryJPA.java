package com.anima.features.newsletter;

import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

@Repository
public class NewsRepositoryJPA {

    @PersistenceContext
    private EntityManager entityManager;

    @Transactional
    public void addNews(NewsEntity newsEntity){
        entityManager.createNativeQuery("INSERT INTO NEWS (title, author, about, content, creation_date, UUID) VALUES (?,?,?,?,?,?)")
                .setParameter(1, newsEntity.getTitle())
                .setParameter(2, newsEntity.getAuthor())
                .setParameter(3, newsEntity.getAbout())
                .setParameter(4, newsEntity.getContent())
                .setParameter(5, newsEntity.getCreationDate())
                .setParameter(6, newsEntity.getUUID())
                .executeUpdate();
    }
}
