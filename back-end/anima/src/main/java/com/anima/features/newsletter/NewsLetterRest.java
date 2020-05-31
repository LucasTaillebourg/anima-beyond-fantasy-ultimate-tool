package com.anima.features.newsletter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NewsLetterRest {

    @Autowired
    private NewsLetterService newsLetterService;

    @GetMapping("/news")
    public News health(@RequestParam( value = "title") String title, @RequestParam( value = "author") String author, @RequestParam( value = "content") String content)  {

        return News.builder()
                .author(author)
                .title(title)
                .content(content)
                .build();
    }

    @CrossOrigin
    @GetMapping("/latestTest")
    public News latest(){
        System.out.println("Request received");
        return newsLetterService.getLatest();
    }
}
