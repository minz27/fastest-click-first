import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../score.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  scores = [];
  playerScore: number;
  constructor(private _scoreService: ScoreService, private route: ActivatedRoute,
                    private router: Router) { }

  ngOnInit() {
    this._scoreService.getScores()
      .subscribe(data => this.scores = data);

    this.route.paramMap.subscribe((params: ParamMap)=>{
      let _score = parseInt(params.get('score'));
      this.playerScore = _score;
    });  
  }

  hasPlayerScore(){
    return !isNaN(this.playerScore);
  }

  goToHome(){
    this.router.navigate(['/home']);
  }
}
