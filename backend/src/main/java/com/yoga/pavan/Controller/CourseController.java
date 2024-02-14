package com.yoga.pavan.Controller;

import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;
import static org.springframework.http.HttpStatus.OK;
import static com.yoga.pavan.Utils.MyConstant.COURSE;
import static com.yoga.pavan.Utils.MyConstant.COURSELIST;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yoga.pavan.dto.request.CourseRequest;
import com.yoga.pavan.dto.response.BasicResponse;
import com.yoga.pavan.dto.response.CourseResponse;
import com.yoga.pavan.Service.CourseService;
import com.yoga.pavan.Utils.MyConstant;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(MyConstant.USER )
@RequiredArgsConstructor
public class CourseController {

    private final CourseService courseService;

    @GetMapping(COURSELIST)
    public ResponseEntity<BasicResponse<CourseResponse>> getCourseList(){
        BasicResponse<CourseResponse> response=new BasicResponse<>();
        try{
            response=courseService.getAllCourse();
            return new ResponseEntity<>(response, OK);
        }
        catch(Exception exception){
            response.setMessage("Something Went Wrong");
            return new ResponseEntity<>(response,EXPECTATION_FAILED);
        }
    }

    @PostMapping(COURSE)
    public ResponseEntity<BasicResponse<CourseResponse>> createBooking(@RequestBody CourseRequest courseRequest) {
        BasicResponse<CourseResponse> response = new BasicResponse<>();
        try {
            BasicResponse<CourseResponse> createdBookingResponse = courseService.register(courseRequest);
            response.setMessage(createdBookingResponse.getMessage());
            response.setData(createdBookingResponse.getData());
            return new ResponseEntity<>(response, OK);
        } catch (Exception e) {
            response.setMessage("Failed to create booking: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping(COURSE + "/{courseId}")
    public ResponseEntity<BasicResponse<CourseResponse>> updateCourse(@PathVariable String courseId, @RequestBody CourseRequest courseRequest) {
        BasicResponse<CourseResponse> responses = new BasicResponse<>();
        try {
            BasicResponse<CourseResponse> updatedCourse = courseService.updateCourse(courseId, courseRequest);
            responses.setMessage(updatedCourse.getMessage());
            responses.setData(updatedCourse.getData());
            return new ResponseEntity<>(responses, OK);
        } catch (Exception e) {
            responses.setMessage("Failed to update course: " + e.getMessage());
            return new ResponseEntity<>(responses, HttpStatus.INTERNAL_SERVER_ERROR);
        }
}
    @DeleteMapping(COURSE + "/{courseId}")
    public ResponseEntity<BasicResponse<CourseResponse>> deleteBooking(@PathVariable String courseId) {
        BasicResponse<CourseResponse> response = new BasicResponse<>();
        try {
            BasicResponse<CourseResponse> deletedcourseResponse = courseService.deletecourse(courseId);
            response.setMessage(deletedcourseResponse.getMessage());
            return new ResponseEntity<>(response, OK);
        } catch (Exception e) {
            response.setMessage("Failed to delete booking: " + e.getMessage());
            return new ResponseEntity<>(response, INTERNAL_SERVER_ERROR);
  }

    
}
}
