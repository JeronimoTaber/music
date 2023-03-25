package com.jhipster.demo.bootifulmusic.repository;

import com.jhipster.demo.bootifulmusic.domain.Genre;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Genre entity.
 */
@SuppressWarnings("unused")
@Repository
public interface GenreRepository extends JpaRepository<Genre, Long> {}
