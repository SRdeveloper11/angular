import { Component, OnInit } from '@angular/core';
import { Test1Service } from '../test1.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  todaydate:any;
  newcomp = "Today's Date:--";
  constructor(private myservice: Test1Service) { }

  ngOnInit() {
          this.todaydate = this.myservice.showTodayDate();
  }
}
