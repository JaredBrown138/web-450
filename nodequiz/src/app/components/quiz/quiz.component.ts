import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from '../../services/API/api-service.service';
import { ColorGradingDirective } from '../../directives/color-grading.directive';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz: Object;
  questions: Array<object>;
  quizId: any;
  quizTitle: any;
  answers: Array<string>;
  actualAnswers: Array<any> = [];
  questionsCompleted: number = 0;
  submited: boolean = false;
  score: any;
  numberOfQuestions: Number;
  utilToggle: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    public api: APIService
  ) {
    this.utilToggle = true;
    this.quizId = this.activatedRoute.snapshot.params['id'];
    this.api.sendGetRequest(('quiz/' + this.quizId)).subscribe((res) => {
      this.quiz = res;
      this.quizTitle = res['title'];
      this.questions = res['questions'];
      this.answers = [];
      this.getActualAnswers();
      this.numberOfQuestions = this.quiz['questions'].length;

    })

  }

  ngOnInit() { }

  /**
   * Calculates the number of questions that
   * have been answered thus far
   */
  calculateAnswered() {
    this.questionsCompleted = 0;
    this.answers.forEach((x) => {
      this.questionsCompleted += 1;
    });
  }

  /**
   * iterate through the quiz object
   * and extract actual (correct) answers
   */
  getActualAnswers() {
    this.questions.forEach((x) => {
      this.actualAnswers.push(x['answer']);
    });
  }

  /**
   * returns the appropriate class based on
   * whether or not the quiz has been submitted
   * and whether or not the question was answered
   * correctly
   * @param question
   */
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

  /**
   * Disables the buttons once the quiz
   * has been submitted
   */
  isDisabled() {
    if (this.submited) {
      return 'true';
    } else {
      return 'false';
    }
  }

  /**
   * A helper function which determines if the 
   * answer given is correct or not. The question
   * is actual the index position, so the values
   * of the index positions are compared.
   * @param question 
   */
  checkAnswer(question) {
    if (this.actualAnswers[question] === this.answers[question]) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Submits and checks the quiz. A call to the 
   * API service is made to save the quiz to the 
   * database via the API.
   */
  submit() {
    this.submited = true;
    window.scrollTo(0, 0);
    let correctQuestions = 0;
    for (let x = 0; x < this.questions.length; x++) {
      if (this.checkAnswer(x)) {
        correctQuestions++;
      }
    }
    this.score = (correctQuestions / this.questions.length) * 100;
    console.log(this.buildSubmissionObject());
    this.api.submitTest(this.buildSubmissionObject()).subscribe((res) => {
      console.log(res);
    });

  }

  /**
   * A Helper function which maps local values
   * to a object which will be sent to the API 
   * to save the quiz submission.
   */
  buildSubmissionObject() {
    let submissionObject = {};
    submissionObject['employeeId'] = this.api.employeeId;
    submissionObject['title'] = this.quiz['title'];
    submissionObject['version'] = this.quiz['version'];
    submissionObject['quizId'] = this.quizId;
    submissionObject['score'] = this.score;
    submissionObject['dateCompleted'] = new Date();
    submissionObject['answers'] = [];
    for (let x = 0; x < this.numberOfQuestions; x++) {
      submissionObject['answers'][x] = {}
      submissionObject['answers'][x]['question'] = this.quiz['questions'][x][x];
      submissionObject['answers'][x]['answerGiven'] = this.answers[x];
      submissionObject['answers'][x]['actualAnswer'] = this.actualAnswers[x];
    }
    return submissionObject;

  }

  /**
   * Toggles the utility card using a bool
   * flag. 
   */
  toggleUtilCard() {
    if (this.utilToggle) {
      this.utilToggle = false;
    } else {
      this.utilToggle = true;
    }
  }
}
