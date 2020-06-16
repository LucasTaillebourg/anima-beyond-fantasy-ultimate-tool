package com.anima.features.newsletter;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Collection;

public interface NewsRepository extends CrudRepository<NewsEntity, Integer> {

    @Query(value = "SELECT * FROM NEWS",nativeQuery = true)
    Collection<NewsEntity> findAllNews();

    @Query(value = "SELECT * FROM NEWS ORDER BY creation_date DESC LIMIT 1", nativeQuery = true)
    NewsEntity findLastNews();


}