package com.yoga.pavan.Service;

import com.yoga.pavan.dto.request.RegisterRequest;
import com.yoga.pavan.dto.request.loginRequest;
import com.yoga.pavan.dto.response.LoginResponse;
import com.yoga.pavan.dto.response.RegisterResponse;

public interface AuthenticationService {
        RegisterResponse register (RegisterRequest request);

        LoginResponse login(loginRequest request);
}
