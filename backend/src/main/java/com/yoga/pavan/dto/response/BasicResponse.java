package com.yoga.pavan.dto.response;

import java.util.Collections;
import java.util.List;

// import org.hibernate.mapping.List;

// import io.jsonwebtoken.lang.Collections;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class BasicResponse<T> {
    private String message;
    @Builder.Default
    private List<T> data=Collections.emptyList();
}
