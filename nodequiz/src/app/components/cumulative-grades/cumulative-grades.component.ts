import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../services/Demo/demo.service';

@Component({
  selector: 'app-cumulative-grades',
  templateUrl: './cumulative-grades.component.html',
  styleUrls: ['./cumulative-grades.component.css']
})
export class CumulativeGradesComponent implements OnInit {
  recentQuizzes: any;
  average: any;
  testsTaken: any;

  constructor(demo: DemoService) {
    this.recentQuizzes = demo.getRecentQuizzes();
    this.average = demo.getAverage();
    this.testsTaken = this.recentQuizzes.length;
  }

  ngOnInit() {}
}
