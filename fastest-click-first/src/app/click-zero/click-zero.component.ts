import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-click-zero',
  templateUrl: './click-zero.component.html',
  styleUrls: ['./click-zero.component.css']
})
export class ClickZeroComponent implements OnInit {

  @Input('broadcastData') currentBlock: number;
  
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

}
