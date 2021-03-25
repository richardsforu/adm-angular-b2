import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sunmmary',
  templateUrl: './sunmmary.component.html',
  styleUrls: ['./sunmmary.component.css']
})
export class SunmmaryComponent{

  @Input()
  totalbtnHitsCount:number

  totalHitsSummary(){
    console.log(">>>>>>>>>>>> "+this.totalbtnHitsCount);
  }
}
