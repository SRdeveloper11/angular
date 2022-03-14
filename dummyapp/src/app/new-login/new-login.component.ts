import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-login',
  templateUrl: './new-login.component.html',
  styleUrls: ['./new-login.component.css']
})
export class NewLoginComponent implements OnInit {
  newcomponentt = "Entered in new component created";
  constructor() { }
  ngOnInit(): void {
  }
  loadd() {
    alert("Username:-- " + ((<HTMLInputElement>
      document.getElementById("user")).value) +
      "\n" +"Password:-- " + ((<HTMLInputElement>document.
        getElementById("pass")).value));
  }
}
