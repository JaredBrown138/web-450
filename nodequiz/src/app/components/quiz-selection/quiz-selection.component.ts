import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../services/Demo/demo.service';

@Component({
  selector: 'app-quiz-selection',
  templateUrl: './quiz-selection.component.html',
  styleUrls: ['./quiz-selection.component.css']
})
export class QuizSelectionComponent implements OnInit {
  public availableQuizzes = this.demoService.getAvailableQuizzes();
  public filterString = '';
  private filteredQuizzes: Array<object> = [];
  private searchString: string;

  constructor(public demoService: DemoService) {
    this.BuildQuizzesArray();

    this.searchString = '';
  }

  ngOnInit() { }

  filterQuizzes() {
    if (this.searchString == '' || this.searchString == ' ') {
      this.BuildQuizzesArray();
    } else {
      console.log('go');
      let regexPrefix = '^';
      let regexSuffix = '';
      let regexString =
        regexPrefix + this.searchString.toLowerCase() + regexSuffix;
      let regexObject = RegExp(regexString);
      this.filteredQuizzes = [];
      this.availableQuizzes.forEach((v, i, a) => {
        if (regexObject.test(v['title'].toLowerCase())) {
          this.filteredQuizzes.push(v);
        }
      });
    }
  }

  BuildQuizzesArray() {
    this.filteredQuizzes = []; //We have to be sure array is empty
    this.availableQuizzes.forEach((x) => {
      this.filteredQuizzes.push(x);
    });
  }
}
