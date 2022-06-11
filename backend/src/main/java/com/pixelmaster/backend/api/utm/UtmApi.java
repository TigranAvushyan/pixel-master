package com.pixelmaster.backend.api.utm;

import com.pixelmaster.backend.dto.utm.UtmRequestDTO;
import com.pixelmaster.backend.modal.Utm;
import com.pixelmaster.backend.service.UtmService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("utm")
@RequiredArgsConstructor
@Slf4j
public class UtmApi {

  public final UtmService utmService;

  @PostMapping
  public Utm addUtm(@RequestBody UtmRequestDTO requestDTO) {
    return utmService.saveUtm(requestDTO.ip, requestDTO.os, requestDTO.site);
  }



  @GetMapping
  public Page<Utm> getAllUtm(@PageableDefault(sort = {"date"}, direction = Sort.Direction.DESC) Pageable pageable) {
    return utmService.getAllUtm(pageable);
  }
}
