package com.yoga.pavan.Controller;

import static com.yoga.pavan.Utils.MyConstant.AUTH;
import static com.yoga.pavan.Utils.MyConstant.LOGIN;
import static com.yoga.pavan.Utils.MyConstant.REGISTER;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yoga.pavan.Service.AuthenticationService;
import com.yoga.pavan.dto.request.RegisterRequest;
import com.yoga.pavan.dto.request.loginRequest;
import com.yoga.pavan.dto.response.LoginResponse;

import com.yoga.pavan.dto.response.RegisterResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(AUTH)
@RequiredArgsConstructor

public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping(REGISTER)
    public ResponseEntity<RegisterResponse> register(@RequestBody RegisterRequest request) {
        RegisterResponse response = new RegisterResponse();
        try {
            response = authenticationService.register(request);
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Something went wrong");

            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PostMapping(LOGIN) 
    public ResponseEntity<LoginResponse> login(@RequestBody loginRequest request) {
        LoginResponse response = new LoginResponse();
        try {
        response=authenticationService.login(request);
        return new ResponseEntity<>(response,HttpStatus.ACCEPTED);
        } catch (Exception e) {
            response = LoginResponse.builder().message("Something went wrong!").token("").build();
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }
}
