import { Component, OnInit } from '@angular/core';

import { timer } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ScoreService } from '../score.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  public remainingTime: number = 120;
  subscribeTimer: any;
  interval;
  score: number = 0;
  currentBlock: number;
  secondPassed: boolean = false;
  secondPassedCounter: number = 0;
  name: string;
  
  constructor(private router: Router, private _scoreService: ScoreService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let playerName = params.get('playerName');
      this.name = playerName;
    })
  }

  oberserableTimer() {
    const source = timer(1000, 2000);
    const abc = source.subscribe(val => {
      console.log(val, '-');
      this.subscribeTimer = this.remainingTime - val;
    });
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.remainingTime > 0) {
        this.currentBlock = Math.floor((Math.random()*10)%4);
        console.log(this.currentBlock);
        if(this.secondPassedCounter == 1){
          this.remainingTime--;
          this.secondPassedCounter = 0;
        }else{
          this.secondPassedCounter = 1;
        }
      }else{
        this._scoreService.saveScore(name, this.score);
        this.router.navigate(['/leaderboard']);
      } 
    },500)
  }

  updateScore(addScore){
    this.score += parseInt(addScore);
  }

}
