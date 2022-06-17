package com.pixelmaster.backend.dto.user;

import lombok.Getter;
import lombok.Setter;


/**
 * @author - Tigran Avushyan <tigran.avushyan@gmail.com>
 * @created - 09/08/2021
 * @project - proriv
 */


@Getter
@Setter
public class CreateUserRequest {

  private String username;
  private String password;
  private String phone;
  private String firstName;

  private String lastName;
}
