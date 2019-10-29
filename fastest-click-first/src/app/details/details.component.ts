import { Component, OnInit } from '@angular/core';

import { timer } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  public remainingTime: number = 120;
  subscribeTimer: any;
  interval;
  public score: number = 0;
  public currentBlock: number;
  public secondPassed: boolean = false;
  public secondPassedCounter: number = 0;
  
  constructor() { }

  ngOnInit() {
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
      } 
    },500)
  }

}
