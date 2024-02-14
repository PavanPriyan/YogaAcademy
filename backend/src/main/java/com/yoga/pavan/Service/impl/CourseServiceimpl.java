package com.yoga.pavan.Service.impl;



import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.yoga.pavan.dto.request.CourseRequest; 
import com.yoga.pavan.dto.response.BasicResponse;
import com.yoga.pavan.dto.response.CourseResponse;
import com.yoga.pavan.model.course;
import com.yoga.pavan.Service.CourseService;
import com.yoga.pavan.UserRepository.CourseRepository;

import lombok.RequiredArgsConstructor;
import lombok.var;

@Service
@RequiredArgsConstructor
public class CourseServiceimpl implements CourseService{

    private final CourseRepository courseRepository;

    @Override
    public BasicResponse<CourseResponse> getAllCourse() {
        List<course> courses = courseRepository.findAll();
        List<CourseResponse>  courseResponses= courses.stream().map(course-> CourseResponse.builder()
                    .id(course.getId()).description(course.getDescription()).name(course.getName()).durationInMonths(course.getDurationInMonths())
                    .build())
                            .collect(Collectors.toList());

        return BasicResponse.<CourseResponse>builder()
                .message("Course Data fetched").data(courseResponses).build();
    }
    @Override
    public BasicResponse<CourseResponse> updateCourse(String courseId, CourseRequest courseRequest) {
        BasicResponse<CourseResponse> response = new BasicResponse<>();
        try {
            Optional<course> optionalCourse = courseRepository.findById(courseId);
            if (optionalCourse.isPresent()) {
                course existingCourse = optionalCourse.get();
                existingCourse.setName(courseRequest.getName());
                existingCourse.setDescription(courseRequest.getDescription());
                existingCourse.setDurationInMonths(courseRequest.getDurationInMonths());
                courseRepository.save(existingCourse);
                response.setMessage("Course updated successfully");
            } else {
                response.setMessage("Course not found with ID: " + courseId);
            }
        } catch (Exception e) {
            response.setMessage("Failed to update course: " + e.getMessage());
        }
        return response;
    }

    @Override
    public  BasicResponse<CourseResponse> register(CourseRequest request) {
        var courses = course.builder()
            .id(request.getId())
            .description(request.getDescription())
            .durationInMonths(request.getDurationInMonths())
            .name(request.getName())
            .build();
        courseRepository.save(courses);
        return BasicResponse.<CourseResponse>builder()
            .message("Done")
            .build();
        }

    @Override
    public BasicResponse<CourseResponse> deletecourse(String courseId) {
        // TODO Auto-generated method stub
        if (courseRepository.existsById(courseId)) {
            courseRepository.deleteById(courseId);
            return BasicResponse.<CourseResponse>builder()
                    .message("Course deleted successfully")
                    .build();
        } else {
            return BasicResponse.<CourseResponse>builder()
                    .message("Course not found with ID: " + courseId)
                    .build();
        }
    }
    // @Override
    // public CourseResponse register(CourseRequest request) {
    //     // TODO Auto-generated method stub
    //     throw new UnsupportedOperationException("Unimplemented method 'register'");
    // }

}
