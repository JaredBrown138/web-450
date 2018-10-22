import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { imports } from '../../services/Util/util.imports';
import { declarations } from '../../services/Util/util.imports';
import { providers } from '../../services/Util/util.imports';

import { QuizComponent } from './quiz.component';

describe('QuizComponent', () => {
  let component: QuizComponent;
  let fixture: ComponentFixture<QuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuizComponent, declarations],
      imports: [imports],
      providers: [providers]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('calculateAnswered() should be set to the number of entries in the answers array', () => {
    component.answers = ['1', '2', '3', '4'];
    component.calculateAnswered();
    expect(component.questionsCompleted).toEqual(4);
  });

  it('getClass() should return question-text if the quiz has not been submitted', () => {
    component.submited = false;
    expect(component.getClass("")).toEqual("question-text");
  });

  it('isDisabled() should return true if the quiz has been submitted', () => {
    component.submited = true;
    expect(component.isDisabled()).toBeTruthy();
  });
});
