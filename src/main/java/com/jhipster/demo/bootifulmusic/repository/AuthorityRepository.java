package com.jhipster.demo.bootifulmusic.repository;

import com.jhipster.demo.bootifulmusic.domain.Authority;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {}
