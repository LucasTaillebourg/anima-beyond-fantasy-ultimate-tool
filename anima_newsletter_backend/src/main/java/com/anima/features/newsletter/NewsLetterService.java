package com.anima.features.newsletter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    private NewsRepositoryJPA newsRepositoryJPA;

    public NewsDTO getLatest(){
        return newsMapper.entityToDto(newsRepository.findLastNews());
    }

    public List<NewsDTO> getAllNews(){
        Iterable<NewsEntity> newsEntitys = newsRepository.findAllNews();
        List<NewsDTO> news = new ArrayList<>();
        newsEntitys.forEach(newsEntity -> news.add(newsMapper.entityToDto(newsEntity)));
        return news;
    }

    public NewsDTO addNews(NewsDTO news){
        news.setUUID(UUID.randomUUID().toString());
        news.setCreationDate(Calendar.getInstance().getTime().getTime());
        newsRepositoryJPA.addNews(newsMapper.dtoToEntity(news));
        return news;
    }
}
