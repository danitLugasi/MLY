import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any = [];
  constructor(private http: HttpClient){
  }

    ngOnInit(): void {
       this.http.get<any>('api/SampleData').subscribe(data => {
        data.forEach(element => this.data.push(element));
       }

         //If using visual studio code:
         /*
          this.http.get<any>('http://localhost:5000/api/SampleData').subscribe(data => {
           data.forEach(element => this.data.push(element));
          }
          
          */


      );
    }
}
