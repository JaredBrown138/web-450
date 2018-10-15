import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../services/Demo/demo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz: Array<object>;
  quizId: any;
  quizTitle: any;
  answers: Array<string>;
  actualAnswers: Array<any> = [];
  questionsCompleted: number = 0;
  submited: boolean = false;
  score: any;

  constructor(
    private demoService: DemoService,
    private activatedRoute: ActivatedRoute,
    public http: HttpClientModule
  ) {
    this.answers = [];
    this.quizId = this.activatedRoute.snapshot.params['id'];
    this.quizTitle = this.demoService.getQuizTitle(this.quizId);
    this.demoSetup();
    this.getActualAnswers();
  }

  ngOnInit() {}

  demoSetup() {
    let objectToDuplicate = this.demoService.getQuizInfo();

    this.quiz = objectToDuplicate;
    console.log(this.quiz);
  }

  calculateAnswered() {
    this.questionsCompleted = 0;
    this.answers.forEach((x) => {
      this.questionsCompleted += 1;
    });
  }

  getActualAnswers() {
    this.quiz.forEach((x) => {
      this.actualAnswers.push(x['answer']);
    });
  }
  getClass(question) {
    if (!this.submited) {
      return 'question-text';
    } else {
      if (this.checkAnswer(question)) {
        return 'question-text correct';
      } else {
        return 'question-text incorrect';
      }
    }
  }

  isDisabled() {
    if (this.submited) {
      return 'true';
    } else {
      return 'false';
    }
  }

  checkAnswer(question) {
    if (this.actualAnswers[question] === this.answers[question]) {
      return true;
    } else {
      return false;
    }
  }

  submit() {
    this.submited = true;
    window.scrollTo(0, 0);
    let correctQuestions = 0;
    for (let x = 0; x < this.quiz.length; x++) {
      if (this.checkAnswer(x)) {
        correctQuestions++;
      }
    }
    this.score = (correctQuestions / this.quiz.length) * 100;
  }
}
