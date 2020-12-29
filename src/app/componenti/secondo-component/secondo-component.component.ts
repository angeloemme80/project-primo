import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondo-component',
  templateUrl: './secondo-component.component.html',
  styleUrls: ['./secondo-component.component.scss']
})
export class SecondoComponentComponent implements OnInit {

  constructor() { }

  variabile:string;
  prima:Prima =  new Prima;

  ngOnInit(): void {
    this.variabile = 'Ecco la mia SECONDA variabile';
    
    this.prima.logga("ciaooooooooooooooooooooo");
    
  }



}

class Prima {
  public logga(p:string) {
      console.log(p)
  }
}
