import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
/**
 * The grandaddy of all services. This service deals
 * with anything relating to the API. Probably should have
 * created other services to delegate to, but oh well.
 *
 * @export
 * @class APIService
 */
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

  /**
   * Sends a get request to the api at the specified
   * endpoint, used as a helper function
   *
   * @param {*} endpoint
   * @returns
   * @memberof APIService
   */
  sendGetRequest(endpoint) {
    return this.http.get(this.apiRoot + endpoint);
  }

  /**
   * A function which sends a request to the 
   * user endpoint of the API to get a user object
   * Called in the loginComponents login function.
   *
   * @param {*} employeeId
   * @returns {Observable<object>}
   * @memberof APIService
   */
  verifyUser(employeeId): Observable<object> {
    return this.sendGetRequest("user/" + employeeId);
  }

  /**
   * A function which can interpret the response from
   * the verifyUser(function). Called in the loginComponents
   * login function.
   *
   * @param {*} response
   * @returns
   * @memberof APIService
   */
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

  /**
   * Logs the user out
   *
   * @memberof APIService
   */
  logout() {
    this.loggedIn = false;
    this.name = "username";
    this.employeeId = "";
    this.testsTaken = undefined;
    this.avgScore = undefined;
  }

  /**
   * A getter for the loggedIn property
   *
   * @returns
   * @memberof APIService
   */
  isLoggedIn() {
    return this.loggedIn;
  }

  /**
   * Submits a quiz using a post call to the API
   *
   * @param {Object} completedTestObject
   * @returns {Observable<any>}
   * @memberof APIService
   */
  submitTest(completedTestObject: Object): Observable<any> {
    return this.http.post('/api/submit', completedTestObject);
  }

  /**
   * Returns an Array of all of the quiz attempts
   * associated with a user.
   *
   * @returns {Observable<object>}
   * @memberof APIService
   */
  getCompletedQuizes(): Observable<object> {
    return this.sendGetRequest("completed/" + this.employeeId);
  }

  /**
   * Makes another request to the user endpoint to get
   * any updated information.
   *
   * @returns {Observable<object>}
   * @memberof APIService
   */
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

  /**
   * Returns all quizzes that are available to be
   * taken
   *
   * @returns {Observable<object>}
   * @memberof APIService
   */
  getQuizzes(): Observable<object> {
    return this.sendGetRequest("quiz").pipe(map(response => {
      this.availableQuizzes = response;
      return response;
    }));
  }

  /**
   * Returns a list of all the users. Used in the admin panel
   * of the dashboard.
   *
   * @returns {Observable<object>}
   * @memberof APIService
   */
  getUsers(): Observable<object> {
    return this.sendGetRequest("user/").pipe(map(response => {
      return response;
    }));
  }

  /**
   * A getter for the isAdmin property
   *
   * @returns
   * @memberof APIService
   */
  getAdminStatus() {
    return this.isAdmin;
  }

  /**
   * Sends a request to have a user account
   * reset
   *
   * @param {*} employeeId
   * @returns {Observable<object>}
   * @memberof APIService
   */
  userReset(employeeId): Observable<object> {
    return this.sendGetRequest("reset/" + employeeId).pipe(map(response => {
      return response;
    }));
  }

  /**
   * Gets statistics of the quizzes specified in
   * the argument.
   *
   * @param {*} availableQuizzes
   * @returns
   * @memberof APIService
   */
  getQuizStats(availableQuizzes) {
    let reqObject = {};
    reqObject['quizzes'] = [];
    //build request object 
    availableQuizzes.forEach(element => {
      let quizObject = {}
      quizObject['quizId'] = element['quizId']
      quizObject['title'] = element['title'];
      reqObject['quizzes'].push(quizObject);
    });
    //send it dude!
    return this.http.post('/api/quizstats', reqObject).pipe(map(response => {
      console.log('response');
      return response;
    }));


  }

}
