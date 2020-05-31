package com.anima.features.newsletter;

import org.springframework.stereotype.Service;

@Service
public class NewsLetterService {

    public News getLatest(){
        return News.builder()
                .author("Hugo le belliqueux")
                .title("Tfacon mon perso il est nul")
                .content("Jsuis pas content mon perso il est nul, epuis il fait pas de degat, epuis je sert a rien, epuis jsuis pas content")
                .id("0000")
                .build();
    }
}
