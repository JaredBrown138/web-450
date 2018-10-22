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
  isAdmin: boolean;
  testsTaken: number;
  avgScore: number;
  name: string;
  completedQuizzes: any;
  quizStats: any;

  availableQuizzes: any;

  constructor(public http: HttpClient) {
    this.loggedIn = false;
    this.name = "username";
    this.isAdmin = false;
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
      this.isAdmin = response['isAdmin'];
      this.name = response["name"];
      this.testsTaken = response["quizzesCompleted"];
      this.getCompletedQuizes().subscribe(x => { this.completedQuizzes = x });
      this.getQuizzes().subscribe(res => {
        this.getQuizStats(res).subscribe(response => {
          this.quizStats = response;
        })
      });


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

  submitTest(completedTestObject: Object): Observable<any> {
    return this.http.post('/api/submit', completedTestObject);
  }

  getCompletedQuizes(): Observable<object> {
    return this.sendGetRequest("completed/" + this.employeeId);
  }

  refreshStats(): Observable<object> {
    return this.sendGetRequest("user/" + this.employeeId).pipe(map(response => {
      this.testsTaken = response["quizzesCompleted"];
      this.getQuizzes().subscribe(res => {
        this.getQuizStats(res).subscribe(response => {
          this.quizStats = response;
        })
      });
      if (response['quizzesCompleted'] == 0) {
        this.avgScore = 0;
      } else {
        this.avgScore = response["avgScore"];
      }
      return response;
    }));
  }

  getQuizzes(): Observable<object> {
    return this.sendGetRequest("quiz").pipe(map(response => {
      this.availableQuizzes = response;
      return response;
    }));
  }

  getUsers(): Observable<object> {
    return this.sendGetRequest("user/").pipe(map(response => {
      return response;
    }));
  }
  getAdminStatus() {
    return this.isAdmin;
  }
  userReset(employeeId): Observable<object> {
    return this.sendGetRequest("reset/" + employeeId).pipe(map(response => {
      return response;
    }));
  }
  getQuizStats(availableQuizzes) {
    let reqObject = {};
    reqObject['quizzes'] = [];

    availableQuizzes.forEach(element => {
      let quizObject = {}
      quizObject['quizId'] = element['quizId']
      quizObject['title'] = element['title'];
      reqObject['quizzes'].push(quizObject);
    });
    return this.http.post('/api/quizstats', reqObject).pipe(map(response => {
      console.log('response');
      return response;
    }));


  }

}
