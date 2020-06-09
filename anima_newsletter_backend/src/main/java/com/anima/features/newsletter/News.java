package com.anima.features.newsletter;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class News {
    String id;
    String title;
    String author;
    String content;

}
