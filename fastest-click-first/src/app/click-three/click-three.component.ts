import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-click-three',
  templateUrl: './click-three.component.html',
  styleUrls: ['./click-three.component.css']
})
export class ClickThreeComponent implements OnInit {

  @Input('broadcastData') currentBlock: number;
  @Output() public childEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  isSelectedBlock(){
    if (this.currentBlock == 3){
      return true;
    }else{
      return false;
    }
  }
  changeScore(){
    if(this.currentBlock == 3){
      this.childEvent.emit("10");
    }else{
      return this.childEvent.emit("-5");
    }
  }

}
