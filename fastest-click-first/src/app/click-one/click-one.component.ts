import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-click-one',
  templateUrl: './click-one.component.html',
  styleUrls: ['./click-one.component.css']
})
export class ClickOneComponent implements OnInit {

  @Input('broadcastData') currentBlock: number;
  
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
}
