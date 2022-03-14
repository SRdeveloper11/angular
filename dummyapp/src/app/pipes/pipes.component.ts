import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  public name = "Codevolution";
   public todaydate = new Date();
   public jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};
   public months = ["Jan", "Feb", "Mar", "April", "May", "Jun",
              "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  constructor() { }

  ngOnInit(): void {
  }

}
