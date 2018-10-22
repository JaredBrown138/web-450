import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../../services/API/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employeeId: string;
  userMessage: string = "";

  constructor(public router: Router, public api: APIService) { }

  ngOnInit() { }

  /**
   * Check to see if the entered id is a valid format,
   * if it is call login(), else set user message
   * to invalid user id to alert user.
   */
  attemptLogin() {
    if (this.employeeId == undefined) {
      this.userMessage = "Invalid User ID";
    } else if (this.checkEmployeeId(this.employeeId)) {
      this.login(this.employeeId);
    } else {
      this.userMessage = "Invalid User ID";
    }
  }

  /**
   * A helper function which makes sure that the
   * id is in a valid format using regex.
   * @param id 
   */
  checkEmployeeId(id: string) {
    if (id.length <= 6 || id.length >= 8) {
      return false;
    }
    let employeeIdRegex = RegExp('^[a-zA-Z0-9]+$');
    //Why not just check length in Regex? - Who has time for that?
    if (!employeeIdRegex.test(id)) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * Logs the user in with a call to the API service.
   * @param id 
   */
  login(id: string) {
    this.api.verifyUser(id).subscribe(res => {
      let loggedIn = this.api.login(res);
      if (loggedIn == true) {
        console.log("123");
        this.router.navigateByUrl('/dashboard');
        console.log("go");
      } else {
        this.userMessage = "User Not Found";
      }
    })
  }
}
