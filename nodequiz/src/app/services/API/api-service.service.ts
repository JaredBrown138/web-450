import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  apiRoot: string = "/api/";
  loggedIn: boolean;
  employeeId: string;
  testsTaken: number;
  avgScore: number;
  name: string;
  completedQuizzes: any;

  availableQuizzes: Array<object>;

  constructor(public http: HttpClient) {
    this.loggedIn = false;
    this.name = "username";
  }

  sendGetRequest(endpoint) {
    return this.http.get(this.apiRoot + endpoint);
  }

  verifyUser(employeeId): Observable<object> {
    return this.sendGetRequest("user/" + employeeId);
  }

  login(response) {
    if (response["authenticated"] === false) {

      return false;

    } else {
      console.log("cleared");
      this.loggedIn = true;
      this.employeeId = response['employeeId'];
      this.name = response["name"];
      this.testsTaken = response["quizzesCompleted"];
      this.getCompletedQuizes().subscribe(x => { this.completedQuizzes = x });

      if (response['quizzesCompleted'] == 0) {
        this.avgScore = 0;
      } else {
        this.avgScore = response["avgScore"];
      }
      return true;
    }
  }
  logout() {
    this.loggedIn = false;
    this.name = "username";
    this.employeeId = "";
    this.testsTaken = undefined;
    this.avgScore = undefined;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  submitTest(completedTestObject: Object): Observable<object> {
    return this.http.post('/api/submit', completedTestObject);
  }

  getCompletedQuizes(): Observable<object> {
    return this.sendGetRequest("completed/" + this.employeeId);
  }

  refreshStats(): Observable<object> {
    return this.sendGetRequest("user/" + this.employeeId).pipe(map(response => {
      this.testsTaken = response["quizzesCompleted"];
      if (response['quizzesCompleted'] == 0) {
        this.avgScore = 0;
      } else {
        this.avgScore = response["avgScore"];
      }
      return response;
    }));
  }


}
