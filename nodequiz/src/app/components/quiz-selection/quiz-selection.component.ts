import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../services/Demo/demo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-selection',
  templateUrl: './quiz-selection.component.html',
  styleUrls: ['./quiz-selection.component.css']
})
export class QuizSelectionComponent implements OnInit {
  public availableQuizzes = this.demoService.getAvailableQuizzes();

  constructor(public demoService: DemoService) {}

  ngOnInit() {}
}
