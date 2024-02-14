package com.yoga.pavan.Service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.yoga.pavan.dto.response.BasicResponse;
import com.yoga.pavan.dto.response.UserResponse;
import com.yoga.pavan.model.User;
import com.yoga.pavan.UserRepository.UserRepository;
import com.yoga.pavan.Service.UserService;
// import com.yoga.pavan.enumerated.Role;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public BasicResponse<UserResponse>getAllUser(){
        List<User> users = userRepository.findAll();
        List<UserResponse> userResponses = users.stream()
        .map(user -> UserResponse.builder()
        .id(user.getId())
        .name(user.getName())
        .email(user.getEmail())
        .image(user.getImage())
        .password(user.getPassword())
         .role(user.getRole())
        .build())
        .collect(Collectors.toList());
        return BasicResponse.<UserResponse>builder().message("User Data fetched").data(userResponses).build();
    }

}