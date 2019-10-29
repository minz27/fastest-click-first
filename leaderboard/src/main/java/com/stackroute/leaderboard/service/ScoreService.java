package com.stackroute.leaderboard.service;

import com.stackroute.leaderboard.domain.Score;
import org.springframework.stereotype.Service;

import java.util.List;

public interface ScoreService {
    public List<Score> getAllScores();

    public void saveScore(Score score);
}
