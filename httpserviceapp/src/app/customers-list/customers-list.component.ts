import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Customers } from '../customers';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  Customers:any =[];

  constructor(private apiService: ApiService){}
  ngOnInit(){
    this.apiService.getCustomers().subscribe((data)=>{
      this.Customers = data;
    });
  }
}
