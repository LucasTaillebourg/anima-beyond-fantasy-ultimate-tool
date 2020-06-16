package com.anima.features.newsletter;

import org.springframework.stereotype.Service;

@Service
public class NewsMapper {

    public NewsDTO entityToDto(NewsEntity newsEntity){
        return NewsDTO.builder()
                .author(newsEntity.getAuthor())
                .content(newsEntity.getContent())
                .creationDate(newsEntity.getCreationDate())
                .UUID(newsEntity.getUUID())
                .title(newsEntity.getTitle())
                .build();
    }

    public NewsEntity dtoToEntity(NewsDTO newsDTO){
        System.out.println(newsDTO.getUUID());
        return NewsEntity.builder()
                .author(newsDTO.getAuthor())
                .content(newsDTO.getContent())
                .creationDate(newsDTO.getCreationDate())
                .UUID(newsDTO.getUUID())
                .title(newsDTO.getTitle())
                .build();
    }
}
