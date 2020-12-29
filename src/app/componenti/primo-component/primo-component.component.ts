import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primo-component',
  templateUrl: './primo-component.component.html',
  styleUrls: ['./primo-component.component.scss']
})
export class PrimoComponentComponent implements OnInit {

  abilitato:boolean = false;
  anno: number = 2021;
  mese: string = "Febbraio";
  nomeDellaClasse:string = "text-primary";

  constructor() { 
    setTimeout( () => {
      this.abilitato=true;
      this.nomeDellaClasse = "text-danger";
    }, 5000);
  }

  

  ngOnInit(): void {
   
  }

}
