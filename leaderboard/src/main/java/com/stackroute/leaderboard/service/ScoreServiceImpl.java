package com.stackroute.leaderboard.service;

import com.stackroute.leaderboard.domain.Score;
import com.stackroute.leaderboard.repository.ScoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;
@Service
public class ScoreServiceImpl implements ScoreService{
    @Autowired
    private ScoreRepository scoreRepository;

    public List<Score> getAllScores(){
        List<Score> scores = scoreRepository.findAll();
        Collections.sort(scores, new Comparator<Score>(){

            @Override
            public int compare(Score o1, Score o2) {
                return Double.compare( o2.getScore(),o1.getScore());
            }
        });
        return scores.subList(0, 10);
    }

    public void saveScore(Score score){
        Score savedScore = new Score();
        savedScore.setName(score.getName());
        savedScore.setScore(score.getScore());
        scoreRepository.save(savedScore);
    }
}
