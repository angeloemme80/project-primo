import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpserviceService} from 'src/app/servizi/httpservice.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private Serviziohttp:HttpserviceService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log("DENTRO onSubmit()");
    console.log(form);

/*
    this.getMioServizio()
    .subscribe(data => {
        console.log(data);
        console.log(data.messaggio);
        console.log(data.timestamp);
      
    });
*/
    this.http.post(
                    "http://www.angelomassaro.it/rest/test.php",
                    [  
                      {"name":"Shyam", "email":"shyamjaiswal@gmail.com"},  
                      {"name":"Bob", "email":"bob32@gmail.com"},  
                      {"name":"Bob", "email":"bob32@gmail.com"}  
                    ]
                  ).subscribe(
                    result => {
                      console.log("dentro result");
                      console.log(result)
                    },
                    error => {
                      console.log("dentro error");
                      console.log(error)
                    },
                    () => {
                      console.log("dentro onCompleted");
                    }
                  );

  }

  getMioServizio(){
    return this.http.get<any>("http://localhost:9080/system/properties/mioservizio");
    
  }

  //TODO  da provare il post a //("http://www.angelomassaro.it/rest/test.php");

}
