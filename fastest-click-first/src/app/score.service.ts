import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor() { }

  saveScore(name, score){
    //save data to database using api
    console.log(name + ":" + score);
  }
}
