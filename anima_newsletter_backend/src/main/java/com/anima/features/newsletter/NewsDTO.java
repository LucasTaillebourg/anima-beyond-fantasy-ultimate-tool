package com.anima.features.newsletter;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Builder
public class NewsDTO {
    private String id;
    private String title;
    private String author;
    private String content;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date creationDate;

}
