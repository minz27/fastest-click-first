import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  errorMessage: string = "";
  playerName: string = "";
  constructor(private router: Router) { }

  ngOnInit() {
  }

  playGame(name){
    if(name == ""){
      this.errorMessage = "Please enter a name";
    }else{
      this.playerName = name;
      this.router.navigate(['/play', this.playerName]);
    }
  }
}
