package com.stackroute.leaderboard.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document
public class Score {
    @Id
    private String _id;
    private String name;
    private int score;

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public Score(String id, String name, int score) {
        this._id = id;
        this.name = name;
        this.score = score;
    }

    public Score() {
    }
}
