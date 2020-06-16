package com.anima.features.newsletter;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.sql.Date;

@Getter
@Setter
@Builder
@ToString
public class NewsDTO {
    private String UUID;
    private String title;
    private String author;
    private String content;
    private long creationDate;
}
