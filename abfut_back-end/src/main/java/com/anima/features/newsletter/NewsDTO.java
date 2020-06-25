package com.anima.features.newsletter;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Builder
@ToString
public class NewsDTO {
    private String UUID;
    private String title;
    private String author;
    private String about;
    private String content;
    private long creationDate;
}
