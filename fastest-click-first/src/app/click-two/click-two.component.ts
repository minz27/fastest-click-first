import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-click-two',
  templateUrl: './click-two.component.html',
  styleUrls: ['./click-two.component.css']
})
export class ClickTwoComponent implements OnInit {

  @Input('broadcastData') currentBlock: number;

  constructor() { }

  ngOnInit() {
  }

  isSelectedBlock(){
    if (this.currentBlock == 2){
      return true;
    }else{
      return false;
    }
  }
}
