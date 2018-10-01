import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employeeId: string;

  constructor() {}

  ngOnInit() {}

  attemptLogin() {
    if (this.checkEmployeeId(this.employeeId)) {
      this.login(this.employeeId);
    }
  }

  checkEmployeeId(id: string) {
    if (id.length <= 6 || id.length >= 8) {
      return false;
    }
    let employeeIdRegex = RegExp('^[a-zA-Z0-9]+$');
    if (!employeeIdRegex.test(id)) {
      return false;
    } else {
      return true;
    }
  }

  login(id: string) {
    console.log(id);
  }
}
