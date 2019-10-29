import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-click-one',
  templateUrl: './click-one.component.html',
  styleUrls: ['./click-one.component.css']
})
export class ClickOneComponent implements OnInit {

  @Input('broadcastData') currentBlock: number;
  @Output() public childEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  isSelectedBlock(){
    if (this.currentBlock == 1){
      return true;
    }else{
      return false;
    }
  }

  changeScore(){
    if(this.currentBlock == 1){
      this.childEvent.emit("10");
    }else{
      return this.childEvent.emit("-5");
    }
  }
}
