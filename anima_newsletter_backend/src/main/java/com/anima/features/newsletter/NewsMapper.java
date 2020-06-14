package com.anima.features.newsletter;

import org.springframework.stereotype.Service;

@Service
public class NewsMapper {

    public NewsDTO entityToDto(NewsEntity newsEntity){
        return NewsDTO.builder()
                .author(newsEntity.getAuthor())
                .content(newsEntity.getContent())
                .creationDate(newsEntity.getCreationDate())
                .id(newsEntity.getId().toString())
                .title(newsEntity.getTitle())
                .build();
    }
}
