import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../services/Demo/demo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  currentSlide: number;
  presentationObject: any;
  quizId: string;

  suffix: string = '.PNG';

  currentResourceURL: string;

  constructor(
    private demoService: DemoService,
    private activatedRoute: ActivatedRoute,
    public router: Router
  ) {
    this.currentSlide = 1;
    this.quizId = this.activatedRoute.snapshot.params['id'] || "A001";
    this.presentationObject = demoService.getPresentationInfo(this.quizId);
    this.currentResourceURL =
      this.presentationObject.path + this.currentSlide + this.suffix;
  }

  ngOnInit() { }

  /**
   * Move back a slide, but obviously
   * don't go backwards past 1
   */
  regress() {
    if (this.currentSlide > 1) {
      this.currentSlide -= 1;
      this.currentResourceURL =
        this.presentationObject.path + this.currentSlide + this.suffix;
    }
  }

  /**
   * Move forward by one slide, obviously
   * dont progress if there are no
   * more slides
   */
  advance() {
    if (this.currentSlide < this.presentationObject.slideLen) {
      this.currentSlide += 1;
      this.currentResourceURL =
        this.presentationObject.path + this.currentSlide + this.suffix;
    }
  }

  /**
   * Navigate the user to the quiz page
   */
  takeQuiz() {
    this.router.navigateByUrl('/quiz/' + this.presentationObject.id);
  }
}
