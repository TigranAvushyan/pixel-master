package com.pixelmaster.backend.service;

import com.pixelmaster.backend.modal.Utm;
import com.pixelmaster.backend.repository.UtmRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Date;

@RequiredArgsConstructor
@Service
public class UtmService {

  public final UtmRepository utmRepository;


  public Utm saveUtm(String ip, String os, String site) {
    Utm utm = new Utm(ip, site, os, new Date());
    utmRepository.save(utm);
    return utm;
  }

  public Page<Utm> getAllUtm(Pageable pageable) {
    return utmRepository.findAll(pageable);
  }

}

