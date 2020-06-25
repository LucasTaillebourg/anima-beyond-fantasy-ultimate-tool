package com.anima.features.newsletter;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Collection;

public interface NewsRepository extends CrudRepository<NewsEntity, Integer> {

    @Query(value = "SELECT * FROM NEWS ORDER BY creation_date DESC",nativeQuery = true)
    Collection<NewsEntity> findAllNews();

    @Query(value = "SELECT * FROM NEWS ORDER BY creation_date DESC LIMIT 1", nativeQuery = true)
    NewsEntity findLastNews();

    @Query(value = "SELECT * FROM NEWS WHERE LOWER(author) = LOWER(:author) ORDER BY creation_date DESC", nativeQuery = true)
    Collection<NewsEntity> getAllNewsByAuthor(@RequestParam( value = "author") String author);


}