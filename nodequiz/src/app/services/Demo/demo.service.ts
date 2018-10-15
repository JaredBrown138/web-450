import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  private demoEnabled: boolean = true;

  private average: any = 90;

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
      0: 'This is a test question for the demo',
      answer: 'Answer 3',
      answers: [
        { a0: 'Answer 1' },
        { a1: 'Answer 2' },
        { a2: 'Answer 3' },
        { a3: 'Answer 4' }
      ]
    },
    {
      1: 'This is a test question for the demo',
      answer: 'Answer 3',
      answers: [
        { a0: 'Answer 1' },
        { a1: 'Answer 2' },
        { a2: 'Answer 3' },
        { a3: 'Answer 4' }
      ]
    },
    {
      2: 'This is a test question for the demo',
      answer: 'Answer 3',
      answers: [
        { a0: 'Answer 1' },
        { a1: 'Answer 2' },
        { a2: 'Answer 3' },
        { a3: 'Answer 4' }
      ]
    },
    {
      3: 'This is a test question for the demo',
      answer: 'Answer 3',
      answers: [
        { a0: 'Answer 1' },
        { a1: 'Answer 2' },
        { a2: 'Answer 3' },
        { a3: 'Answer 4' }
      ]
    },
    {
      4: 'This is a test question for the demo',
      answer: 'Answer 3',
      answers: [
        { a0: 'Answer 1' },
        { a1: 'Answer 2' },
        { a2: 'Answer 3' },
        { a3: 'Answer 4' }
      ]
    },
    {
      5: 'This is a test question for the demo',
      answer: 'Answer 3',
      answers: [
        { a0: 'Answer 1' },
        { a1: 'Answer 2' },
        { a2: 'Answer 3' },
        { a3: 'Answer 4' }
      ]
    },
    {
      6: 'This is a test question for the demo',
      answer: 'Answer 3',
      answers: [
        { a0: 'Answer 1' },
        { a1: 'Answer 2' },
        { a2: 'Answer 3' },
        { a3: 'Answer 4' }
      ]
    },
    {
      7: 'This is a test question for the demo',
      answer: 'Answer 3',
      answers: [
        { a0: 'Answer 1' },
        { a1: 'Answer 2' },
        { a2: 'Answer 3' },
        { a3: 'Answer 4' }
      ]
    },
    {
      8: 'This is a test question for the demo',
      answer: 'Answer 3',
      answers: [
        { a0: 'Answer 1' },
        { a1: 'Answer 2' },
        { a2: 'Answer 3' },
        { a3: 'Answer 4' }
      ]
    },
    {
      9: 'This is a test question for the demo',
      answer: 'Answer 3',
      answers: [
        { a0: 'Answer 1' },
        { a1: 'Answer 2' },
        { a2: 'Answer 3' },
        { a3: 'Answer 4' }
      ]
    }
  ];

  private recentQuizzes: Array<object> = [
    {
      title: 'Express/NodeJS',
      link: '/presentation/A001',
      id: 'A001',
      score: '90'
    },
    { title: 'Angular', link: '/presentation/A002', id: 'A002', score: '80' },
    {
      title: 'Basic JavaScript',
      link: '/presentation/A003',
      id: 'A003',
      score: '100'
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
  getRecentQuizzes() {
    return this.recentQuizzes;
  }
  getAverage() {
    return this.average;
  }
}
