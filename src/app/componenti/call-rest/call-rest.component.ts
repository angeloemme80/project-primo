import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/componenti/call-rest/Info'

@Component({
  selector: 'app-call-rest',
  templateUrl: './call-rest.component.html',
  styleUrls: ['./call-rest.component.scss']
})
export class CallRestComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  idSessione: string;

  getContatore() {
    return this.http.get<Info>('http://localhost:8080/').subscribe( resp => {
      console.log(resp);
      console.log(resp.data.contatore);
      console.log(resp.data.req.sessionId);
      this.idSessione = resp.data.req.sessionId;
    })
  }

}
