import { Component, ElementRef, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';

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
  calendarioCreato:string = "Nessun calendario creato";
  valoreDiInput:string = "VALORE INIZIALE";

  @ViewChild('marcatoInput') elementoInput:ElementRef;

  @Input() inputItem: string;
  @Output() outputDaInviareAlPadre = new EventEmitter<string>();

  constructor() { 
    setTimeout( () => {
      this.abilitato=true;
      this.nomeDellaClasse = "text-danger";
    }, 5000);
  }

  ngOnInit(): void {
  }

  emettiAlPadre(value: string) {
    this.outputDaInviareAlPadre.emit(value);
  }

  onCreateCalendario(){
    this.calendarioCreato = "CLENDARIO CREATO!!! " + this.valoreDiInput;
  }

  onMouseOver(){
    this.calendarioCreato = "over!!!";
    console.log("Leggo da TypeScript il valore dell'elemento input: " + this.elementoInput.nativeElement.value);
  }

  onInput(event:Event){
    //console.log(event);
    this.valoreDiInput = (<HTMLInputElement> event.target).value;
    if(this.valoreDiInput==""){
      this.abilitato=false;
    } else {
      this.abilitato=true;
    }
    console.log(this.valoreDiInput);
  }

  passoOggetto(idRiferimento:HTMLInputElement){
    console.log(idRiferimento);
    console.log(idRiferimento.value);
  }

}
