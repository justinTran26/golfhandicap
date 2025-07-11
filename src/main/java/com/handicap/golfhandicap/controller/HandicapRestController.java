package com.handicap.golfhandicap.controller;

import com.handicap.golfhandicap.model.GolfScore;
import com.handicap.golfhandicap.service.HandicapService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")  // base path for all methods here
public class HandicapRestController {

    private final HandicapService service;

    public HandicapRestController(HandicapService service) {
        this.service = service;
    }

    @GetMapping("/handicap")
    public double getHandicap() {
        return service.calculateHandicap();
    }

    @GetMapping("/scores")
    public List<GolfScore> getScores() {
        return service.getAllScores();
    }

    @PostMapping("/scores")
    public GolfScore addScore(@RequestBody GolfScore score) {
        service.addScore(score);
        return score;
    }
}
