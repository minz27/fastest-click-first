import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-click-zero',
  templateUrl: './click-zero.component.html',
  styleUrls: ['./click-zero.component.css']
})
export class ClickZeroComponent implements OnInit {

  @Input('broadcastData') currentBlock: number;
  @Output() public childEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  isSelectedBlock(){
    if (this.currentBlock == 0){
      return true;
    }else{
      return false;
    }
  }

  changeScore(){
    if(this.currentBlock == 0){
      this.childEvent.emit("10");
    }else{
      return this.childEvent.emit("-5");
    }
  }

}
