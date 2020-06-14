package com.anima.features.newsletter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class NewsLetterRest {

    @Autowired
    private NewsLetterService newsLetterService;

    @GetMapping("/news")
    public NewsDTO health(@RequestParam( value = "title") String title, @RequestParam( value = "author") String author, @RequestParam( value = "content") String content)  {

        return NewsDTO.builder()
                .author(author)
                .title(title)
                .content(content)
                .build();
    }

    @CrossOrigin
    @GetMapping("/latestTest")
    public NewsDTO latest(){
        System.out.println("Request received : get latest");
        return newsLetterService.getLatest();
    }

    @CrossOrigin
    @GetMapping("/allNews")
    public List<NewsDTO> allNews(){
        System.out.println("Request received : Get all news");
        return newsLetterService.getAllNews();
    }

    @CrossOrigin
    @PostMapping("/addNews")
    public List<NewsDTO> addNews(@RequestBody NewsDTO news){
        System.out.println("Request received : Add news");
        return newsLetterService.getAllNews();
    }
}
