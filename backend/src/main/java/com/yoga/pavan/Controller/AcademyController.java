package com.yoga.pavan.Controller;

// import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
// import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;
// import static org.springframework.http.HttpStatus.OK;

// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.yoga.pavan.Service.AcademyService;
// import com.yoga.pavan.dto.request.AcademyRequest;
// import com.yoga.pavan.dto.response.AcademyResponse;
// import com.yoga.pavan.dto.response.BasicResponse;


// import lombok.RequiredArgsConstructor;



// @RestController
// @RequestMapping(USER)
// @RequiredArgsConstructor
public class AcademyController {

//     private final AcademyService academyService;

//     @GetMapping(COURSELIST)
//     public ResponseEntity<BasicResponse<AcademyResponse>> getCourseList(){
//         BasicResponse<AcademyResponse> response=new BasicResponse<>();
//         try{
//             response=academyService.getAllCourse();
//             return new ResponseEntity<>(response, OK);
//         }
//         catch(Exception exception){
//             response.setMessage("Something Went Wrong");
//             return new ResponseEntity<>(response,EXPECTATION_FAILED);
//         }
//     }

//     @PostMapping(COURSE)
//     public ResponseEntity<AcademyResponse> register(@RequestBody AcademyRequest request) {
//         AcademyResponse response=new AcademyResponse();

//         try{
//             response=academyService.register(request);
//             return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
//         }
//         catch(Exception e){
//             response.setMessage("Something Went Wrong!!!!");
//             return new ResponseEntity<>(response, EXPECTATION_FAILED);
//         }
        
//     }
//     @PutMapping(COURSE + "/{courseId}")
//     public ResponseEntity<BasicResponse<AcademyResponse>> updateAcademy(@PathVariable String AcademyId, @RequestBody AcademyRequest AcademyRequest) {
//         BasicResponse<AcademyResponse> responses = new BasicResponse<>();
//         try {
//             BasicResponse<AcademyResponse> updatedAcademy = AcademyService.updateAcademy(AcademyId, AcademyRequest);
//             responses.setMessage(updatedAcademy.getMessage());
//             responses.setData(updatedAcademy.getData());
//             return new ResponseEntity<>(responses, OK);
//         } catch (Exception e) {
//             responses.setMessage("Failed to update course: " + e.getMessage());
//             return new ResponseEntity<>(responses, HttpStatus.INTERNAL_SERVER_ERROR);
//         }
// }
//     @DeleteMapping(COURSE + "/{paymentId}")
//     public ResponseEntity<BasicResponse<AcademyResponse>> deleteBooking(@PathVariable String AcademyId) {
//         BasicResponse<AcademyResponse> response = new BasicResponse<>();
//         try {
//             BasicResponse<AcademyResponse> deletedAcademyResponse = AcademyService.deleteAcademy(AcademyId);
//             response.setMessage(deletedAcademyResponse.getMessage());
//             return new ResponseEntity<>(response, OK);
//         } catch (Exception e) {
//             response.setMessage("Failed to delete booking: " + e.getMessage());
//             return new ResponseEntity<>(response, INTERNAL_SERVER_ERROR);
//   }

    
// }
}