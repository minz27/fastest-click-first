package com.stackroute.leaderboard.repository;

import com.stackroute.leaderboard.domain.Score;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ScoreRepository extends MongoRepository<Score, Integer> {
    //List<Score> findAllOrderByScoreDesc();
}
