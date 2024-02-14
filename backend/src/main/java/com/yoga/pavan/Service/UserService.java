package com.yoga.pavan.Service;

import com.yoga.pavan.dto.response.BasicResponse;
import com.yoga.pavan.dto.response.UserResponse;

public interface UserService {
    BasicResponse<UserResponse>getAllUser();
}