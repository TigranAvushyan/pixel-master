package com.pixelmaster.backend.api.utm;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("utm")
@Slf4j
public class UtmApi {

  @PostMapping
  public void addUtm(@RequestBody String site, HttpServletRequest request) {
    log.info(site);
    log.info(request.getLocalName());
  }
}
