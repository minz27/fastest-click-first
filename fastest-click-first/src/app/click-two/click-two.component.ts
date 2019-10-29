import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-click-two',
  templateUrl: './click-two.component.html',
  styleUrls: ['./click-two.component.css']
})
export class ClickTwoComponent implements OnInit {

  @Input('broadcastData') currentBlock: number;
  @Output() public childEvent = new EventEmitter();

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

  changeScore(){
    if(this.currentBlock == 2){
      this.childEvent.emit("10");
    }else{
      return this.childEvent.emit("-5");
    }
  }
}
