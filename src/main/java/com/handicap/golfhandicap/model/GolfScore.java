package com.handicap.golfhandicap.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class GolfScore {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate date;
    private int score;

    private int slopeRating;
    private double courseRating;
    private int coursePar;
    private double differential;

    // Getters and setters
    public Long getId() { return id; }

    public LocalDate getDate() { return date; }
    public void setDate(LocalDate date) { this.date = date; }

    public int getScore() { return score; }
    public void setScore(int score) { this.score = score; }

    public int getSlopeRating() { return slopeRating; }
    public void setSlopeRating(int slopeRating) { this.slopeRating = slopeRating; }

    public double getCourseRating() { return courseRating; }
    public void setCourseRating(double courseRating) { this.courseRating = courseRating; }

    public int getCoursePar() { return coursePar; }
    public void setCoursePar(int coursePar) { this.coursePar = coursePar; }

    public double getDifferential() { return differential; }
    public void setDifferential(double differential) { this.differential = differential; }
}
