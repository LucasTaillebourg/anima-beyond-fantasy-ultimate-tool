package com.anima.features.newsletter;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Builder
public class NewsDTO {
    private String id;
    private String title;
    private String author;
    private String content;
    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDate creationDate;

}
