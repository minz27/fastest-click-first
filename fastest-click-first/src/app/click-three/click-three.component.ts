import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-click-three',
  templateUrl: './click-three.component.html',
  styleUrls: ['./click-three.component.css']
})
export class ClickThreeComponent implements OnInit {

  @Input('broadcastData') currentBlock: number;
  
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

}
