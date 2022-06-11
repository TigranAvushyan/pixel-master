package com.pixelmaster.backend.repository;

import com.pixelmaster.backend.modal.Utm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UtmRepository extends CrudRepository<Utm, Long> {
  Page<Utm> findAll(Pageable pageable);
}
