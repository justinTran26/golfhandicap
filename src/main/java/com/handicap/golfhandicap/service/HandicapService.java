package com.handicap.golfhandicap.service;

import com.handicap.golfhandicap.model.GolfScore;
import com.handicap.golfhandicap.repository.GolfScoreRepository;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;

@Service
public class HandicapService {

    private final GolfScoreRepository repo;

    public HandicapService(GolfScoreRepository repo) {
        this.repo = repo;
    }

    // Add a score to the database
    public void addScore(GolfScore score) {
        repo.save(score);
    }

    // Get all saved scores
    public List<GolfScore> getAllScores() {
        return repo.findAll();
    }

    // Calculate handicap: (average of 5 most recent scores - 72) * 0.96
    public double calculateHandicap() {
        List<GolfScore> scores = repo.findAll();

        if (scores.size() < 5) {
            return 0.0; // Not enough data
        }

    return (scores.stream()
        .sorted(Comparator.comparing(GolfScore::getDate).reversed())
        .limit(5)
        .mapToInt(GolfScore::getScore)
        .average()
        .orElse(0.0) - 72) * 0.96;

    }
}
