package com.stackroute.leaderboard.controller;

import com.stackroute.leaderboard.domain.Score;
import com.stackroute.leaderboard.service.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
public class ScoreController {
    @Autowired
    private ScoreService scoreService;

    @GetMapping("/scores")
    public ResponseEntity<?> getAllScores(){
        ResponseEntity responseEntity;
        try{
            responseEntity = new ResponseEntity(scoreService.getAllScores(), HttpStatus.OK);
        }catch (Exception e){
            responseEntity = new ResponseEntity("server error", HttpStatus.CONFLICT);
        }
        return responseEntity;
    }

    @PostMapping("/score")
    public ResponseEntity<?> saveScore(@RequestBody Score score){
        ResponseEntity responseEntity;
        try{
            scoreService.saveScore(score);
            responseEntity = new ResponseEntity("Successfully saved", HttpStatus.CREATED);
        }catch (Exception e){
            responseEntity = new ResponseEntity("Couldn't save score", HttpStatus.CONFLICT);
        }
        return responseEntity;
    }
}
