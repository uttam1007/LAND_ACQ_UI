import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  passwordDisplay = false
  togglePassDisplay(){
    this.passwordDisplay = !this.passwordDisplay
  }
  ngOnInit(): void {
  }

}
