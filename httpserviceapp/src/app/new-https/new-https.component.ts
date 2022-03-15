import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Customers } from '../customers';

@Component({
  selector: 'app-new-https',
  templateUrl: './new-https.component.html',
  styleUrls: ['./new-https.component.css']
})
export class NewHttpsComponent implements OnInit {
    title ="http-app";
    Customers:any =[];

    constructor(private apiService: ApiService){}
    ngOnInit(){
      this.apiService.getCustomers().subscribe((data)=>{
        this.Customers = data;
      });
    }

}
