package com.anima.features.newsletter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class NewsLetterService {

    @Autowired
    private NewsRepository newsRepository;
    @Autowired
    private NewsMapper newsMapper;

    public NewsDTO getLatest(){
        return NewsDTO.builder()
                .author("Hugo le belliqueux")
                .title("Tfacon mon perso il est nul")
                .content("Jsuis pas content mon perso il est nul, epuis il fait pas de degat, epuis je sert a rien, epuis jsuis pas content")
                .id("0000")
                .build();
    }

    public List<NewsDTO> getAllNews(){
        Iterable<NewsEntity> newsEntitys = newsRepository.findAllNews();
        List<NewsDTO> news = new ArrayList<>();
        newsEntitys.forEach(newsEntity -> news.add(newsMapper.entityToDto(newsEntity)));
        return news;
    }
}
