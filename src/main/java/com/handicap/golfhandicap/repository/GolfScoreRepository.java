package com.handicap.golfhandicap.repository;

import com.handicap.golfhandicap.model.GolfScore;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GolfScoreRepository extends JpaRepository<GolfScore, Long> {
}
