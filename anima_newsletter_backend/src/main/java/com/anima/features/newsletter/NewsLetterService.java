package com.anima.features.newsletter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.UUID;

@Service
public class NewsLetterService {

    @Autowired
    private NewsRepository newsRepository;
    @Autowired
    private NewsMapper newsMapper;
    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;
    @Autowired
    private NewsRepositoryJPA newsRepositoryJPA;

    private final String INSERT_SQL = "INSERT INTO NEWS (id, title, author, content, creation_date) " +
            "values(:id,:title,:author,:content ,:creationDate )";

    public NewsDTO getLatest(){
        return newsMapper.entityToDto(newsRepository.findLastNews());
    }

    public List<NewsDTO> getAllNews(){
        Iterable<NewsEntity> newsEntitys = newsRepository.findAllNews();
        List<NewsDTO> news = new ArrayList<>();
        newsEntitys.forEach(newsEntity -> news.add(newsMapper.entityToDto(newsEntity)));
        return news;
    }

    public void addNews(NewsDTO news){
        System.out.println("Generation UUID");
        news.setUUID(UUID.randomUUID().toString());
        System.out.println(news.getUUID());
        news.setCreationDate(new Date(Calendar.getInstance().getTime().getTime()));

        System.out.println("TO ENTITY");
        NewsEntity newsEntity = newsMapper.dtoToEntity(news);
        System.out.println("SEND TO ADD NEWS");

        newsRepositoryJPA.addNews(newsEntity);
    }
}
