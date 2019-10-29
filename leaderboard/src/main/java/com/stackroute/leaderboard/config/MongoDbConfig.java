package com.stackroute.leaderboard.config;

import com.stackroute.leaderboard.repository.ScoreRepository;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@EnableMongoRepositories(basePackageClasses = ScoreRepository.class)
@Configuration
public class MongoDbConfig {

}