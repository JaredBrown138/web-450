import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../services/Demo/demo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz: Array<object>;
  quizId: any;
  quizTitle: any;

  constructor(
    private demoService: DemoService,
    private activatedRoute: ActivatedRoute
  ) {
    this.quizId = this.activatedRoute.snapshot.params['id'];
    console.log(this.quizId);
    this.quizTitle = this.demoService.getQuizTitle(this.quizId);
    console.log(this.quizTitle);
    this.demoSetup();
  }

  ngOnInit() {}

  demoSetup() {
    let objectToDuplicate = this.demoService.getQuizInfo();
    for (let i = 1; i < 10; i++) {
      //We replicate the first object 9 more times
      objectToDuplicate[i] = objectToDuplicate[0];
    }
    this.quiz = objectToDuplicate;
    console.log(this.quiz);
  }
}
