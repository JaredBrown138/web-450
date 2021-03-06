import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/API/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  quizzes: any;
  quizStats: any = this.api.quizStats;
  score: any;
  users: any;
  displayedColumns = ['name', 'employeeId', 'quizzesCompleted', 'avgScore', 'reset'];
  dataColumns = ['name', 'quizId', 'avgScore'];

  constructor(public api: APIService, public router: Router) {
    this.api.getQuizzes().subscribe(res => {
      console.log(res);
      this.quizzes = res;
    });
    this.api.refreshStats().subscribe(res => {
      this.score = res['avgScore'].toPrecision(3);
    });
    if (this.api.isAdmin == true) {
      this.api.getUsers().subscribe(res => {
        this.users = res;
        console.log(this.users);
      });

    }
  }

  ngOnInit() {
  }

  /**
   * Navigate to the presentation page for the selected 
   * quiz
   * @param id 
   */
  getPath(id) {
    this.router.navigateByUrl('/presentation/' + id);
  }

  /**
   * Format the average to be displayed
   * @param avg 
   */
  prepareAvg(avg) {
    if (avg == 999 || avg == null) {
      return 0;
    }
    return avg;
  }

  /**
   * Reset the users information using a call
   * to the API Service, and then get the 
   * new data.
   * @param employeeId 
   */
  reset(employeeId) {
    if (window.confirm('Are you sure?')) {
      this.api.userReset(employeeId).subscribe(res => {
        this.api.refreshStats().subscribe(res => {
          this.score = res['avgScore'].toPrecision(3);
        });
        if (this.api.isAdmin == true) {
          this.api.getUsers().subscribe(res => {
            this.users = res;
            console.log(this.users);
          });
        }
      });
    }

  }

}
