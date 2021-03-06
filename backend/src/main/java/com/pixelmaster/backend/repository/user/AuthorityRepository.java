package com.pixelmaster.backend.repository.user;

import com.pixelmaster.backend.modal.user.Authority;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * @author - Tigran Avushyan <tigran.avushyan@gmail.com>
 * @created - 11/08/2021
 * @project - proriv
 */

@Repository
public interface AuthorityRepository extends JpaRepository<Authority, Long> {
  Optional<Authority> findByName(String name);
}
