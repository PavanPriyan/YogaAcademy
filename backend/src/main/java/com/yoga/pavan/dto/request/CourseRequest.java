package com.yoga.pavan.dto.request;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class CourseRequest {
    private String  id;
     private String name;

     private String description;

     private Integer durationInMonths;

}
