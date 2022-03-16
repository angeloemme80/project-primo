import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondo-component',
  templateUrl: './secondo-component.component.html',
  styleUrls: ['./secondo-component.component.scss']
})
export class SecondoComponentComponent implements OnInit {

  toggle:boolean;
  eventi = [];

  constructor() { }

  
  

  ngOnInit(): void {
       this.toggle = true;
  }

  onClick(evento:Event){
    console.log(evento);
    this.eventi.push(evento);
  }

  getClassBianco(){
    return "text-white"
  }

}

