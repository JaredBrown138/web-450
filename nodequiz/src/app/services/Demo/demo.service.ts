import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  private demoEnabled: boolean = true;

  private availableQuizzes: Array<object> = [
    { title: 'Express/NodeJS', link: '/presentation/A001', id: 'A001' },
    { title: 'Angular', link: '/presentation/A002', id: 'A002' },
    { title: 'Basic JavaScript', link: '/presentation/A003', id: 'A003' }
  ];

  private presentationInfo: Array<object> = [
    {
      title: 'Express/NodeJS',
      slideLen: '12',
      path: 'assets/presentations/Express/Slide',
      id: 'A001'
    },
    {
      title: 'Angular',
      slideLen: '12',
      path: 'assets/presentations/Angular/Slide',
      id: 'A002'
    },
    {
      title: 'Basic JavaScript',
      slideLen: '12',
      path: 'assets/presentations/Basic_JavaScript/Slide',
      id: 'A003'
    }
  ];

  private quizInfo: Array<object> = [
    {
      question: 'This is a test question for the demo',
      answers: [
        { a0: 'This is a possible answer' },
        { a1: 'This is a possible answer' },
        { a2: 'This is a possible answer' },
        { a3: 'This is a possible answer' }
      ]
    }
  ];

  constructor() {}

  getDemoState() {
    return this.demoEnabled;
  }
  getAvailableQuizzes() {
    return this.availableQuizzes;
  }
  getPresentationInfo(id: string) {
    let presentationObject: object;
    this.presentationInfo.forEach((x) => {
      if (x['id'] === id) {
        presentationObject = x;
      }
    });
    return presentationObject;
  }
  getQuizInfo() {
    return this.quizInfo;
  }
  getQuizTitle(id: string) {
    console.log('wow');
    let title: string;
    this.presentationInfo.forEach((x) => {
      console.log('nerp');
      if (x['id'] === id) {
        console.log('yerp');
        title = x['title'];
      }
    });
    return title;
  }
}
