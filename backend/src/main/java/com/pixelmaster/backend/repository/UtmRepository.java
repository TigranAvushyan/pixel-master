package com.pixelmaster.backend.repository;

import com.pixelmaster.backend.modal.Utm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UtmRepository extends JpaRepository<Utm, Long>  {
}
