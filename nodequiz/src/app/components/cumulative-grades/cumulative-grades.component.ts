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

  formatDate(date) {
    return moment(date).fromNow();
  }

  getStats() {
    this.api.refreshStats().subscribe(response => {
      this.average = response['avgScore'].toPrecision(3);
      this.testsTaken = response['quizzesCompleted'];
      this.api.getCompletedQuizes().subscribe(res => {
        this.recentQuizzes = res;
      });
    });

  }
}
