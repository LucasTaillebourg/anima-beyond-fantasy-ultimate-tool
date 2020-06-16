package com.anima.features.newsletter;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.Collection;
import java.util.List;

@Repository
public class NewsRepositoryJPA {

    @PersistenceContext
    private EntityManager entityManager;

    @Transactional
    public void addNews(NewsEntity newsEntity){
        entityManager.createNativeQuery("INSERT INTO NEWS (title, author, content, creation_date, UUID) VALUES (?,?,?,?,?)")
                .setParameter(1, newsEntity.getTitle())
                .setParameter(2, newsEntity.getAuthor())
                .setParameter(3, newsEntity.getContent())
                .setParameter(4, newsEntity.getCreationDate())
                .setParameter(5, newsEntity.getUUID())
                .executeUpdate();
    }
}
