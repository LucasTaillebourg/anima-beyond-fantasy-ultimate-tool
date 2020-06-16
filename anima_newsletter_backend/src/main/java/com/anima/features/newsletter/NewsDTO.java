package com.anima.features.newsletter;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.sql.Date;

@Getter
@Setter
@Builder
public class NewsDTO {
    private String UUID;
    private String title;
    private String author;
    private String content;
    private Date creationDate;

}
