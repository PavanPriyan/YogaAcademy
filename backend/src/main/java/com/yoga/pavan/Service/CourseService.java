package com.yoga.pavan.Service;

import com.yoga.pavan.dto.request.CourseRequest;
import com.yoga.pavan.dto.response.BasicResponse;
import com.yoga.pavan.dto.response.CourseResponse;

public interface CourseService {

    BasicResponse<CourseResponse> getAllCourse();

    BasicResponse<CourseResponse> register(CourseRequest request);

    BasicResponse<CourseResponse> deletecourse(String courseId);

    BasicResponse<CourseResponse> updateCourse(String courseId, CourseRequest courseRequest);

}