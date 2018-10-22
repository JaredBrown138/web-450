import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { APIService } from '../../services/API/api-service.service';


@Component({
  selector: 'app-cumulative-grades',
  templateUrl: './cumulative-grades.component.html',
  styleUrls: ['./cumulative-grades.component.css']
})
export class CumulativeGradesComponent implements OnInit {
  recentQuizzes: any;
  average: any;
  testsTaken: any;
  displayedColumns = ['title', 'dateCompleted', 'score'];



  constructor(public api: APIService) {
    this.getStats();
  }

  ngOnInit() {

  }
  /**
   * Use moment.js to format the date
   * @param date 
   */
  formatDate(date) {
    return moment(date).fromNow();
  }
  /**
   * Grab the stats from the API service
   */
  getStats() {
    this.api.refreshStats().subscribe(response => {
      this.average = response['avgScore'].toPrecision(3);
      this.testsTaken = response['quizzesCompleted'];
      this.api.getCompletedQuizes().subscribe(res => {
        this.recentQuizzes = res;
      });
    });

  }
  /**
   * Make sure that the average is displayed correctly
   * @param avg 
   */
  prepareAvg(avg) {
    if (avg == 999 || avg == undefined || avg == null) {
      return 0;
    }
    return avg;
  }
}
