package com.anima.features.newsletter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class NewsLetterService {

    @Autowired
    private NewsRepository newsRepository;
    @Autowired
    private NewsMapper newsMapper;

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
        news.setId(UUID.randomUUID().toString());
        news.setCreationDate(LocalDate.now());

        NewsEntity newsEntity = newsMapper.dtoToEntity(news);
        System.out.println(newsEntity);

        //TODO INSERT TABLE
    }
}
