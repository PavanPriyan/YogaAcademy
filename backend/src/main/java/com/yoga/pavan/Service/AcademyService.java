package com.yoga.pavan.Service;

import com.yoga.pavan.dto.request.AcademyRequest;
import com.yoga.pavan.dto.response.AcademyResponse;
import com.yoga.pavan.dto.response.BasicResponse;

public interface AcademyService {

    BasicResponse<AcademyResponse> getAllCourse();

    AcademyResponse register(AcademyRequest request);

    static BasicResponse<AcademyResponse> updateAcademy(String academyId, AcademyRequest academyRequest) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateAcademy'");
    }

    static BasicResponse<AcademyResponse> deleteAcademy(String academyId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteAcademy'");
    }

}
