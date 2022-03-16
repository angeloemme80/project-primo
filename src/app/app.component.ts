import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-primo';

  daPassareAlComponentFiglio(){
    return "valore passato dal padre al figlio";
  }

  emessoDalPadre(event:Event){
    console.log("Valore passato dal figlio al padre: " + event);
  }

  
}

